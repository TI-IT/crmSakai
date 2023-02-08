import React from 'react';
import CreateOffer from '../../crmServices/offers/createOffer';
import TypeProducts from '../../crmServices/offers/typeProducts';
import DropDownListProducts from '../../crmServices/offers/dropDownListProducts';

const GetDataOffers = ({ server_host }) => {
    return (
        <>
            {/* <CreateOffer /> */}
            <TypeProducts />
            {/* <DropDownListProducts /> */}
        </>
    );
};

export default GetDataOffers;
