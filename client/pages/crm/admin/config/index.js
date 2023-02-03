import React from 'react';
import SaveDataGoogle from '../../../../crmServices/config';

const Offers = ({ server_host }) => {
    return (
        <>
            <h3>Настройки</h3>
            <SaveDataGoogle server_host={server_host} />
        </>
    );
};

export default Offers;
