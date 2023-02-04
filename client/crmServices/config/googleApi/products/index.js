import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { get, post } from '../../../models/crud';
import { useRouter } from 'next/router';

const SaveDataGoogleProducts = () => {
    const [dbData, setDbData] = useState({});
    const [products, setProducts] = useState([]);
    const [message, setMessage] = useState('');
    const router = useRouter();

    //--------------------Получить данные с Api--------------
    async function getAllApiData() {
        const data = await get('data', 'getAllData');
        setDbData(data);
    }
    //--------------------Получить данные с google--------------
    async function getAllDataGoogle() {
        const data = await get('products', 'getAllDataGoogle');
        setProducts(data);
    }

    //--------------------Обновить данные с google--------------
    async function updateAllDataGoogle() {
        const data = await get('products', 'updateAllDataGoogle');
        setProducts(data);
    }

    //-------------------- Записать данные с google на mongoDb
    async function addDataGoogleOne() {
        products.map((i) => {
            console.log(i);
            fetchAddNewDataGoogle(i);
        });
    }
    async function fetchAddNewDataGoogle(data) {
        console.log(data);
        const res = await post('products', 'addAllDataGoogle', data);
        console.log(res);
        // setMessage(res);
    }

    return (
        <>
            <h2>Товары</h2>
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
            <div>{products && products.map((p, id) => <div key={id}>{p.productName}</div>)}</div>
        </>
    );
};

export default SaveDataGoogleProducts;
