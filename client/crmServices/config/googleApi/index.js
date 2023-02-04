import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { get, post } from '../../models/crud';
import LayoutClientsData from '../../clients/layout';
import LayoutProductsData from '../../products/layout';

const SaveDataGoogle = ({ nameData }) => {
    const [getData, setGetData] = useState([]);
    const [message, setMessage] = useState('');
    const [visibleContent, setVisibleContent] = useState(false);

    //--------------------Получить данные с google--------------
    async function getAllDataGoogle() {
        const data = await get(nameData, 'getAllDataGoogle');
        setGetData(data);
    }

    //-------------------- Записать данные с google на mongoDb
    async function addDataGoogleOne() {
        getData.map((i) => {
            fetchAddNewDataGoogle(i);
        });
    }
    async function fetchAddNewDataGoogle(data) {
        const res = await post(nameData, 'addAllDataGoogle', data);
        // console.log(res);
        // setMessage(res);
    }

    return (
        <>
            <h2>{nameData}</h2>
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
                <div className=" mr-3 bg-green-200 border-white-alpha-10 grid">
                    <a href="https://docs.google.com/spreadsheets/d/1IScY8p7BFoRa7QLdGqTw5iHmds3nKhEGGVQvJMVIZnk/edit?usp=sharing" target="_blank">
                        GOOGLE TABLE
                    </a>
                </div>
            </div>
            <LayoutClientsData data={getData} />
            <LayoutProductsData data={getData} />
        </>
    );
};

export default SaveDataGoogle;
