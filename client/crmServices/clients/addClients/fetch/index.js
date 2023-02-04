import React, { useRef, useState } from 'react';
import TableDropdown from '../table/dropdown';
import TableInput from '../table/input';
import { Button } from 'primereact/button';
import { useRouter } from 'next/router';
import { Toast } from 'primereact/toast';

const FetchClients = ({ server_host, dbProducts }) => {
    const [products, setProducts] = React.useState({});
    const toast = useRef();
    const router = useRouter();

    async function fetchAddNewAllData() {
        const fethUrl = server_host + '/products/addAllData';
        try {
            const res = await fetch(fethUrl, {
                method: 'post',
                credentials: 'include',
                body: JSON.stringify(products),
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
            router.push('/crm/products/');
        }, 1300);
    };
    return (
        <>
            <TableDropdown server_host={server_host} dbProducts={dbProducts} setProducts={setProducts} products={products} />
            <TableInput server_host={server_host} dbProducts={dbProducts} setProducts={setProducts} products={products} />
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

export default FetchClients;
