import React, { useEffect, useRef, useState } from 'react';
import { OffersService } from '../../../service/OffersService';
// import LayoutProductsSelectTypeProduct from '../layout/layoutProductsSelectTypeProduct';
import { Dropdown } from 'primereact/dropdown';

const LayoutProductsSelectTypeProduct = ({ selectData }) => {
    // const [selectDataTypeProduct, setSelectDataTypeProduct] = React.useState(null);
    // const [value, setValue] = useState(null);

    // //Выподающий список
    // function selectDataDropDownList(selectGetData) {
    //     const productService = new OffersService();
    //     productService.getProductsTypeProduct(selectGetData).then((data) => setSelectDataTypeProduct(data));
    // }
    return (
        <>
            {/* <div className="card p-fluid max-w-30rem h-full">
                <div className="flex gap-3 h-full">
                    <div className="w-10 h-full">
                        <Dropdown
                            id="dropdown1"
                            placeholder="Выберите Вид сделки"
                            //array[{object.name}]
                            options={selectData}
                            value={value}
                            onChange={(e) => {
                                setValue(e.value);
                                selectDataDropDownList(e.value);
                            }}
                            optionLabel="name"
                        />
                    </div>
                </div>
            </div> */}
            {selectData?.length}
            {selectData?.map((d, id) => (
                <div key={id}>{d.catalog}</div>
            ))}
            {/* <LayoutProductsSelectTypeProduct selectData={selectData} /> */}
        </>
    );
};

export default LayoutProductsSelectTypeProduct;
