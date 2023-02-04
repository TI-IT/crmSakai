import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { get, post } from '../../../models/crud';
import { useRouter } from 'next/router';

const SaveDataGoogle = () => {
    const [dbData, setDbData] = useState({});
    const [clients, setClients] = useState([]);
    const [message, setMessage] = useState('');
    const router = useRouter();

    //--------------------Получить данные с Api--------------
    async function getAllApiData() {
        const data = await get('data', 'getAllData');
        setDbData(data);
    }
    //--------------------Получить данные с google--------------
    async function getAllDataGoogle() {
        const data = await get('clients', 'getAllDataGoogle');
        setClients(data);
    }

    //--------------------Обновить данные с google--------------
    async function updateAllDataGoogle() {
        const data = await get('clients', 'updateAllDataGoogle');
        setClients(data);
    }

    //-------------------- Записать данные с google на mongoDb
    async function addDataGoogleOne() {
        clients.map((i) => {
            console.log(i);
            fetchAddNewDataGoogle(i);
        });
    }
    async function fetchAddNewDataGoogle(data) {
        console.log(data);
        const res = await post('clients', 'addAllDataGoogle', data);
        console.log(res);
        // setMessage(res);
    }

    return (
        <>
            <h2>Клиенты</h2>
            {message}
            <div className="grid">
                <div className=" mr-3">
                    <Button
                        label="Получить данные с googleы"
                        className="bg-yellow-600 border-white-alpha-10"
                        type="button"
                        onClick={() => {
                            getAllDataGoogle();
                        }}
                    />
                </div>
                <div className=" mr-3">
                    <Button
                        label="Загрузить с google на mongoDb"
                        className="bg-green-400 border-white-alpha-10"
                        type="button"
                        onClick={() => {
                            addDataGoogleOne();
                        }}
                    />
                </div>
                <div className=" mr-3">
                    <Button
                        label="Обновить данные с google"
                        className="bg-green-400 border-white-alpha-10"
                        type="button"
                        onClick={() => {
                            updateAllDataGoogle();
                        }}
                    />
                </div>
                <div className=" mr-3 bg-green-200 border-white-alpha-10 grid">
                    <a href="https://docs.google.com/spreadsheets/d/1IScY8p7BFoRa7QLdGqTw5iHmds3nKhEGGVQvJMVIZnk/edit?usp=sharing" target="_blank">
                        GOOGLE TABLE
                    </a>
                </div>
            </div>
            <div>{clients && clients.map((client, id) => <div key={id}>{client.name}</div>)}</div>
        </>
    );
};

export default SaveDataGoogle;
