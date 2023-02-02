import React from 'react';
import GetDataGoogle from '../../../../crmServices/admin/googleData/getData';

const Offers = ({ server_host }) => {
    return (
        <>
            <h3>Настройка каталога наименование</h3>
            <GetDataGoogle server_host={server_host} />
        </>
    );
};

export default Offers;
