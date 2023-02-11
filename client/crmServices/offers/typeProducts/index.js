import React, { useEffect, useRef, useState } from 'react';
import { OffersService } from '../../../crmServices/service/OffersService';
import DropDownListTypeProducts from '../dropDownListTypeProducts';

const TypeProducts = () => {
    const [typeTransaction, setTypeTransaction] = React.useState([]);

    const [value, setValue] = useState(null);
    const [message, setMessage] = useState('');
    let layoutProductsSelect = [];
    useEffect(() => {
        getData();
    }, []);

    function getData() {
        const newTypeProduct = new OffersService();
        //Выподающий список
        // newTypeProduct.getTypeProduct().then((data) => setTypeTransaction(data));
    }

    return (
        <>
            <DropDownListTypeProducts listData={typeTransaction} />
        </>
    );
};

export default TypeProducts;
