import React from 'react';
import GetDataOffers from '../../../crmServices/offers/';

const Offers = ({ server_host }) => {
    return (
        <>
            <h1>OFFER</h1>
            <GetDataOffers server_host={server_host} />
        </>
    );
};

export default Offers;
