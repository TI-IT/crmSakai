import React, { useEffect, useRef, useState } from 'react';
import { OffersService } from '../../../service/OffersService';
import LayoutProductsSelectTypeProduct from '../../layout/layoutProductsSelectTypeProduct';
import { Dropdown } from 'primereact/dropdown';

const LayoutProductsSelectTypeTransaction = ({ listData, selectData }) => {
    const [selectDataTypeProduct, setSelectDataTypeProduct] = React.useState(null);
    const [value, setValue] = useState(null);
    //Выподающий список typeProduct
    if (selectData) {
        const objectSelectData = {};
        let typeProduct;
        const arraySelectData = [];
        selectData?.map((obj) => arraySelectData.push(obj.typeProduct));
        //Уникальное значение
        if (arraySelectData) {
            typeProduct = Array.from(new Set(arraySelectData));
        }

        const productService = new OffersService();
        // productService.getProductsTypeProduct(typeProduct).then((data) => setSelectDataTypeProduct(data));
    }
    return (
        <>
            <div className="card p-fluid max-w-30rem h-full">
                <div className="flex gap-3 h-full">
                    <div className="w-10 h-full">
                        <Dropdown
                            id="dropdown1"
                            placeholder="Выберите Вид продукта"
                            //array[{object.name}]
                            // options={}
                            value={value}
                            onChange={(e) => {
                                setValue(e.value);
                                // selectDataDropDownList(selectData);
                            }}
                            optionLabel="name"
                        />
                    </div>
                </div>
            </div>
            {selectData?.length}
            {selectData?.map((d, id) => (
                <div key={id}>{d.productName}</div>
            ))}
            {/* <LayoutProductsSelectTypeProduct selectData={selectDataTypeProduct} /> */}
        </>
    );
};

export default LayoutProductsSelectTypeTransaction;
