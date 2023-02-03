import React from 'react';
import GetDataGoogle from '../../../../crmServices/admin/googleData/getData';

const Offers = ({ server_host }) => {
    return (
        <>
            <h3>Загрузка данных с гугл в базу</h3>
            <GetDataGoogle server_host={server_host} />
        </>
    );
};

export default Offers;
