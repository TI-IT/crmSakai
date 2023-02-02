import React from 'react';
import GetDataOffersTree from '../../../../crmServices/admin/offers/getData';

const Offers = ({ server_host }) => {
    return (
        <>
            <h3>Настройка каталога наименование</h3>
            <GetDataOffersTree server_host={server_host} />
        </>
    );
};

export default Offers;
