import React, { useEffect, useRef, useState } from 'react';
import { get, post } from '../../models/crud';
import { Dropdown } from 'primereact/dropdown';

const Catalog = ({ listData }) => {
    const [value, setValue] = useState(null);
    const [message, setMessage] = useState(null);

    const arrayData = [];
    if (listData) {
        getData();
    }
    async function getData() {
        const res = await post('products', 'postProductsCatalog', listData);
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
                            placeholder="Выберите Каталог"
                            //array[{object.name}]
                            options={arrayData}
                            value={value}
                            onChange={(e) => {
                                setValue(e.value);
                                setMessage(e.value);
                            }}
                            optionLabel="name"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Catalog;
