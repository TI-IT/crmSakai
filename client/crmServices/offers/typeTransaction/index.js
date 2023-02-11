import React, { useEffect, useRef, useState } from 'react';
import { OffersService } from '../../../crmServices/service/OffersService';
import DropDownListTypeTransaction from '../DropDownListTypeTransaction';

const TypeTransaction = () => {
    const [typeTransaction, setTypeTransaction] = React.useState([]);
    useEffect(() => {
        getData();
    }, []);

    function getData() {
        const newTypeTransaction = new OffersService();
        newTypeTransaction.getTypeTransaction().then((data) => setTypeTransaction(data));
    }

    return (
        <>
            <DropDownListTypeTransaction listData={typeTransaction} />
        </>
    );
};

export default TypeTransaction;
