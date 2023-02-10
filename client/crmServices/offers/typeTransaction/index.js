import React, { useEffect, useRef, useState } from 'react';
import { OffersService } from '../../../crmServices/service/OffersService';
import DropDownListTypeTransaction from '../DropDownListTypeTransaction';

const CreateOffer = () => {
    const [typeTransaction, setTypeTransaction] = React.useState([]);

    const [value, setValue] = useState(null);
    const [message, setMessage] = useState('');
    let layoutProductsSelect = [];
    useEffect(() => {
        getData();
    }, []);

    function getData() {
        const productService = new OffersService();
        //Выподающий список
        productService.getTypeTransaction().then((data) => setTypeTransaction(data));
    }

    return (
        <>
            <DropDownListTypeTransaction listData={typeTransaction} />
        </>
    );
};

export default CreateOffer;
