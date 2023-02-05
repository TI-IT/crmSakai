import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import CrmDropdown from '../../../crmServices/forma/dropdown/add';
import { get, post } from '../../models/crud';

const UpdateClients = ({ server_host, selectClient, setUpdateDialog, updateClients }) => {
    const [dbData, setDbData] = useState('');
    const [message, setMessage] = useState('');
    const [titles, setTitles] = React.useState({});
    const [clients, setClients] = React.useState(selectClient);
    const toast = useRef();
    const router = useRouter();
    useEffect(async () => {
        await getAllApiData();
    }, []);

    async function getAllApiData() {
        const titleObjects = {};
        const data = await get('data', 'getAllData');
        data.Clients?.input.map((i) => {
            titleObjects[i.name] = i.title;
        });
        data.Clients?.dropdown.map((i) => {
            titleObjects[i.name] = i.title;
        });
        setTitles(titleObjects);
    }

    function changeClients(name, value) {
        return setClients({
            ...clients,
            [name]: value
        });
    }

    function crmDropdownGetObject(name, obj) {
        return setClients({
            ...clients,
            [name]: obj.name
        });
    }

    async function fetchAddNewAllData() {
        if (clients.name || clients.phone) {
            const res = await post('clients', 'updateAllData', clients);
            toast.current.show({ severity: 'success', summary: 'Клиент добавлен', life: 2000 });
            setTimeout(() => {
                updateClients();
                setUpdateDialog(false);
            }, 1300);
        } else {
            toast.current.show({ severity: 'error', summary: 'Заполните обязательные поля', life: 3000 });
        }
    }

    return (
        <>
            <div className="card ">
                <label className="opacity-70" htmlFor={titles.id}>
                    <h3>№ {selectClient.id}</h3>
                </label>
                <div className="grid p-fluid text-left ">
                    <div className="col-12 md:col-6">
                        <div className="field">
                            <label className="opacity-70" htmlFor={titles.name}>
                                {titles.name}
                            </label>
                            <InputText id={titles.name} type="text" name={'name'} onChange={(e) => changeClients('name', e.target.value)} value={clients.name} className="p-invalid text-xl" />
                        </div>

                        <div className="field">
                            <label className="opacity-70" htmlFor={titles.phone}>
                                {titles.phone}
                            </label>
                            <InputNumber inputId={titles.phone} onChange={(e) => changeClients('phone', e.value)} value={clients.phone} className="p-invalid text-xl" />
                        </div>
                        <div className="field ">
                            <label className="opacity-70" htmlFor={titles.analiticAddress}>
                                {titles.analiticAddress}
                            </label>
                            <div className="flex gap-2 ">
                                <div className=" w-6 mt-2 text-xl"> {clients.analiticAddress}</div>
                                <CrmDropdown getData={'analiticAddress'} server_host={server_host} change={crmDropdownGetObject} rerender={setMessage} />
                            </div>
                        </div>
                        <div className="field">
                            <label className="opacity-70" htmlFor={titles.citys}>
                                {titles.citys}
                            </label>
                            <div className="flex gap-2 ">
                                <div className=" w-6 mt-2 text-xl"> {clients.citys}</div>
                                <CrmDropdown getData={'citys'} server_host={server_host} change={crmDropdownGetObject} rerender={setMessage} />
                            </div>
                        </div>
                        <div className="field">
                            <label className="opacity-70" htmlFor={titles.address}>
                                {titles.address}
                            </label>
                            <InputTextarea className="text-xl" id={titles.address} rows="3" cols="30" value={clients.address} onChange={(e) => changeClients('address', e.target.value)} />
                        </div>
                    </div>
                    <div className="col-12 md:col-6">
                        <div className="field">
                            <label className="opacity-70" htmlFor={titles.surname}>
                                {titles.surname}
                            </label>
                            <InputText className="text-xl" id={titles.surname} type="text" name={'surname'} onChange={(e) => changeClients('surname', e.target.value)} value={clients.surname} />
                        </div>
                        <div className="field">
                            <label className="opacity-70" htmlFor={titles.patronymic}>
                                {titles.patronymic}
                            </label>
                            <InputText className="text-xl" id={titles.patronymic} type="text" name={'patronymic'} onChange={(e) => changeClients('patronymic', e.target.value)} value={clients.patronymic} />
                        </div>

                        <div className="field">
                            <label className="opacity-70" htmlFor={titles.email}>
                                {titles.email}
                            </label>
                            <InputText className="text-xl" id={titles.email} type="text" name={'email'} onChange={(e) => changeClients('email', e.target.value)} value={clients.email} />
                        </div>
                        <div className="field ">
                            <label className="opacity-70" htmlFor={titles.organizations}>
                                {titles.organizations}
                            </label>
                            <div className="flex gap-2 ">
                                <div className=" w-6 mt-2 text-xl"> {clients.organizations}</div>
                                <CrmDropdown getData={'organizations'} server_host={server_host} change={crmDropdownGetObject} rerender={setMessage} />
                            </div>
                        </div>

                        <div className="field">
                            <label className="opacity-70" htmlFor={titles.notes}>
                                {titles.notes}
                            </label>
                            <InputTextarea className="text-xl" id={titles.notes} rows="3" cols="30" value={clients.notes} onChange={(e) => changeClients('notes', e.target.value)} />
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <Toast ref={toast} />
                    <Button
                        type="button"
                        label="Сохранить"
                        onClick={() => {
                            fetchAddNewAllData();
                        }}
                        icon="pi pi-check"
                        className="bg-green-400 border-white-alpha-10 p-button-success"
                    />
                </div>
            </div>
        </>
    );
};

export default UpdateClients;
