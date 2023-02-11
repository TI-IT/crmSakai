import React, { useEffect, useRef, useState } from 'react';
import { OffersService } from '../../../crmServices/service/OffersService';
import DropDownListTypeProducts from '../dropDownListTypeProducts';

const TypeProducts = ({ listData }) => {
    const [value, setValue] = useState(null);
    const [message, setMessage] = useState('');
    let layoutProductsSelect = [];

    if (listData) {
        getData();
    }
    function getData() {
        const newTypeTransaction = new OffersService();
        //Выподающий список
        newTypeTransaction.getProductsTypeProduct(listData).then((data) => console.log(data));
    }

    // listData = { typeTransaction };
    return (
        <>
            <DropDownListTypeProducts />
        </>
    );
};

export default TypeProducts;
