import React, { useEffect, useRef, useState } from 'react';
import { get, post } from '../../models/crud';
import { Dropdown } from 'primereact/dropdown';
import Catalog from '../catalog';

const TypeProducts = ({ listData }) => {
    const [value, setValue] = useState(null);
    // const [message, setMessage] = useState(null);

    const arrayData = [];
    if (listData) {
        getData();
    }
    async function getData() {
        const res = await post('products', 'postProductsTypeProduct', listData);
        res.map((i) => {
            arrayData.push({ name: i });
        });
    }
    return (
        <>
            <div className="card p-fluid max-w-30rem h-full">
                <div className="flex gap-3 h-full">
                    <div className="w-10 h-full">
                        <Dropdown
                            id="dropdown1"
                            placeholder="Выберите Вид сделки"
                            //array[{object.name}]
                            options={arrayData}
                            value={value}
                            onChange={(e) => {
                                setValue(e.value);
                            }}
                            optionLabel="name"
                        />
                    </div>
                </div>
            </div>
            <Catalog listData={value} />
        </>
    );
};

export default TypeProducts;
