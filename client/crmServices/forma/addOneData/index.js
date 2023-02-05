import React, { useState, useEffect } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

function FormAddOneData({ server_host, addData, rerender }) {
    const [newAddData, setNewAddData] = useState({});
    const [message, setMessage] = useState('');
    const [displayBasic, setDisplayBasic] = useState(false);

    const basicDialogFooter = (
        <Button
            type="button"
            label="Сохранить"
            onClick={() => {
                setDisplayBasic(false);
                fetchAddNewData();
            }}
            icon="pi pi-check"
            className="bg-green-400 border-white-alpha-10"
        />
    );

    async function fetchAddNewData() {
        const fethUrl = server_host + '/' + addData + '/addOneData';
        console.log(addData);
        const newAddDataObject = {};
        newAddDataObject.name = newAddData;
        try {
            const res = await fetch(fethUrl, {
                method: 'post',
                credentials: 'include',
                body: JSON.stringify(newAddDataObject),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await res.json();
            if (data.ok) {
                setMessage('Город добавлен');
                rerender();
            } else {
                setMessage('Ошибка попробуйте другие данные');
            }
        } catch (error) {
            alert('Сервер не отвечает');
        }
    }

    return (
        <>
            <Dialog header={'Введите новую ' + addData} visible={displayBasic} style={{ width: '50vw' }} modal footer={basicDialogFooter} onHide={() => setDisplayBasic(false)}>
                <InputText id={addData} type="text" name={'name'} onChange={(e) => setNewAddData(e.target.value)} value={newAddData.name} className="p-invalid text-blue-600 text-2xl " />
            </Dialog>
            <Button className="bg-green-400 border-white-alpha-10 w-5rem" type="button" icon="pi pi-plus" onClick={() => setDisplayBasic(true)} />
        </>
    );
}

export default FormAddOneData;
