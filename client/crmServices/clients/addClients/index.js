import React, { useEffect, useRef, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputNumber } from 'primereact/inputnumber';
import CrmDropdown from '../../../crmServices/forma/dropdown/add';
import { Button } from 'primereact/button';
import { useRouter } from 'next/router';
import { Toast } from 'primereact/toast';
import { get, getId, post } from '../../models/crud';

const AddClients = ({ server_host }) => {
    const [dbData, setDbData] = useState('');
    const [message, setMessage] = useState('');
    const [titles, setTitles] = React.useState({});
    const [clients, setClients] = React.useState({
        surname: '',
        name: '',
        patronymic: '',
        phone: '',
        email: '',
        analiticAddress: '',
        organizations: '',
        citys: '',
        address: '',
        notes: ''
    });
    const toast = useRef();
    const router = useRouter();
    useEffect(async () => {
        await getAllApiData();
        await getClientsMaxId();
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
    async function getClientsMaxId() {
        const data = await getId('clients', 'getClientsMaxId');
        changeClients('id', data + 1);
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
            const res = await post('clients', 'addAllData', clients);
            toast.current.show({ severity: 'success', summary: 'Клиент добавлен', life: 3000 });
            setTimeout(() => {
                router.push('/crm/clients/');
            }, 1300);
        } else {
            toast.current.show({ severity: 'error', summary: 'Заполните обязательные поля', life: 3000 });
        }
        // const res = await post('clients', 'addAllData', clients);
        // const fethUrl = server_host + '/clients/addAllData';
        // try {
        //     const res = await fetch(fethUrl, {
        //         method: 'post',
        //         credentials: 'include',
        //         body: JSON.stringify(clients),
        //         headers: {
        //             'Content-Type': 'application/json'
        //         }
        //     });
        //     const data = await res.json();
        //     if (data.ok) {
        //         setMessage('Клиент сохранен');
        //     } else {
        //         setMessage('Ошибка попробуйте другие данные');
        //     }
        // } catch (error) {
        //     alert('Сервер не отвечает');
        // }
    }

    return (
        <>
            <div className="card ">
                <label htmlFor={titles.id}>
                    <h3>№ {clients.id}</h3>
                </label>
                <div className="grid p-fluid text-left">
                    <div className="col-12 md:col-6">
                        <div className="field">
                            <label htmlFor={titles.name}>{titles.name}</label>
                            <InputText id={titles.name} type="text" name={'name'} onChange={(e) => changeClients('name', e.target.value)} value={clients.name} className="p-invalid" />
                        </div>

                        <div className="field">
                            <label htmlFor={titles.phone}>{titles.phone}</label>
                            <InputNumber inputId={titles.phone} onChange={(e) => changeClients('phone', e.value)} value={clients.phone} className="p-invalid" />
                        </div>
                        <div className="field">
                            <label htmlFor={titles.analiticAddress}>{titles.analiticAddress}</label>
                            <CrmDropdown getData={'analiticAddress'} server_host={server_host} change={crmDropdownGetObject} rerender={setMessage} />
                        </div>

                        <div className="field">
                            <label htmlFor={titles.citys}>{titles.citys}</label>
                            <CrmDropdown getData={'citys'} server_host={server_host} change={crmDropdownGetObject} rerender={setMessage} />
                        </div>
                        <div className="field">
                            <label htmlFor={titles.address}>{titles.address}</label>
                            <InputTextarea id={titles.address} rows="3" cols="30" value={clients.address} onChange={(e) => changeClients('address', e.target.value)} />
                        </div>
                    </div>
                    <div className="col-12 md:col-6">
                        <div className="field">
                            <label htmlFor={titles.surname}>{titles.surname}</label>
                            <InputText id={titles.surname} type="text" name={'surname'} onChange={(e) => changeClients('surname', e.target.value)} value={clients.surname} />
                        </div>
                        <div className="field">
                            <label htmlFor={titles.patronymic}>{titles.patronymic}</label>
                            <InputText id={titles.patronymic} type="text" name={'patronymic'} onChange={(e) => changeClients('patronymic', e.target.value)} value={clients.patronymic} />
                        </div>
                        <div className="field">
                            <label htmlFor={titles.email}>{titles.email}</label>
                            <InputText id={titles.email} type="text" name={'email'} onChange={(e) => changeClients('email', e.target.value)} value={clients.email} />
                        </div>
                        <div className="field">
                            <label htmlFor={titles.organizations}>{titles.organizations}</label>
                            <CrmDropdown getData={'organizations'} server_host={server_host} change={crmDropdownGetObject} rerender={setMessage} />
                        </div>
                        <div className="field">
                            <label htmlFor={titles.notes}>{titles.notes}</label>
                            <InputTextarea id={titles.notes} rows="3" cols="30" value={clients.notes} onChange={(e) => changeClients('notes', e.target.value)} />
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

export default AddClients;
