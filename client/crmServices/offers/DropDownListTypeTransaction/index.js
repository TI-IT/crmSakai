import React, { useEffect, useRef, useState } from 'react';
import { OffersService } from '../../service/OffersService';
import TypeProducts from '../typeProducts';
import { Dropdown } from 'primereact/dropdown';

const DropDownList = ({ listData }) => {
    const [selectData, setSelectData] = React.useState(null);
    const [value, setValue] = useState(null);

    //Выподающий список
    function selectDataDropDownList(selectGetData) {
        const productService = new OffersService();
        productService.getTypeTransaction(selectGetData).then((data) => setSelectData(data));
    }
    console.log(selectData);
    return (
        <>
            <div className="card p-fluid max-w-30rem h-full">
                <div className="flex gap-3 h-full">
                    <div className="w-10 h-full">
                        <Dropdown
                            id="dropdown1"
                            placeholder="Выберите Вид сделки"
                            //array[{object.name}]
                            options={listData}
                            value={value}
                            onChange={(e) => {
                                setValue(e.value);
                                selectDataDropDownList(e.value);
                            }}
                            optionLabel="name"
                        />
                    </div>
                </div>
            </div>
            <TypeProducts />
        </>
    );
};

export default DropDownList;
