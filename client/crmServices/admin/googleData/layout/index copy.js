import React, { useRef, useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { useRouter } from 'next/router';
import { Toast } from 'primereact/toast';
import { get } from '../../../models/get';

const Layout = ({ server_host, dbData }) => {
    const [newData, setNewData] = useState({});
    const [treeSelectCrmValue, setTreeSelectCrmValue] = useState('');
    const toast = useRef();
    const router = useRouter();

    async function getAllProductsData(text) {
        fetch(server_host + '/products/getAllDataGoogle', {
            method: 'get',
            credentials: 'include'
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                if (data.ok) {
                    const dataArray = data.data;
                    setProducts(dataArray);
                    setMessage(text);
                }
            });
    }

    async function fetchAddNewAllData() {
        const fethUrl = server_host + '/products/addAllData';
        try {
            const res = await fetch(fethUrl, {
                method: 'post',
                credentials: 'include',
                body: JSON.stringify(newData),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await res.json();
            if (data.ok) {
                setMessage('Товар создан');
                toast.current.show({ severity: 'success', summary: 'Товар создан', life: 3000 });
            } else {
                setMessage('Ошибка попробуйте другие данные');
            }
        } catch (error) {
            toast.current.show({ severity: 'error', summary: 'Сервер не отвечает', life: 3000 });
        }
    }
    const showSuccess = () => {
        setTimeout(() => {
            router.push('/crm/offers/');
        }, 1300);
    };
    return (
        <>
            <h1>{treeSelectCrmValue}</h1>
            <div className="text-center">
                <Toast ref={toast} />
                <Button
                    type="button"
                    label="Сохранить"
                    onClick={() => {
                        fetchAddNewAllData();
                        showSuccess();
                    }}
                    icon="pi pi-check"
                    className="bg-green-400 border-white-alpha-10 p-button-success"
                />
            </div>
        </>
    );
};

export default Layout;
