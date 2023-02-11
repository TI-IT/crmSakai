import React, { useEffect, useRef, useState } from 'react';
import { OffersService } from '../../../crmServices/service/OffersService';
import DropDownListTypeTransaction from '../DropDownListTypeTransaction';

const TypeTransaction = () => {
    const [typeTransaction, setTypeTransaction] = React.useState([]);

    const [value, setValue] = useState(null);
    const [message, setMessage] = useState('');
    let layoutProductsSelect = [];
    useEffect(() => {
        getData();
    }, []);

    function getData() {
        const newTypeTransaction = new OffersService();
        //Выподающий список
        newTypeTransaction.getTypeTransaction().then((data) => setTypeTransaction(data));
    }

    return (
        <>
            <DropDownListTypeTransaction listData={typeTransaction} />
        </>
    );
};

export default TypeTransaction;
