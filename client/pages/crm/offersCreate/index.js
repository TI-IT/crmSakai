import React from 'react';
import GetDataOffersCreate from '../../../crmServices/offersCreate';

const OffersCreate = ({ server_host }) => {
    return (
        <>
            <h1>OFFER</h1>
            <GetDataOffersCreate server_host={server_host} />
        </>
    );
};

export default OffersCreate;
