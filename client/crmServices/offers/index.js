import React from 'react';
import CreateOffer from '../../crmServices/offers/createOffer';
import TypeProducts from '../../crmServices/offers/typeProducts';
import TypeTransaction from '../../crmServices/offers/typeTransaction';
import DropDownListProducts from '../../crmServices/offers/dropDownListProducts';

const GetDataOffers = ({ server_host }) => {
    return (
        <>
            {/* <CreateOffer /> */}
            {/* <TypeProducts /> */}
            <TypeTransaction />
            {/* <DropDownListProducts /> */}
        </>
    );
};

export default GetDataOffers;
