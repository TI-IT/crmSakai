import React, { useState, useEffect } from 'react';
import SaveDataGoogleClients from './googleApi/clients';
import SaveDataGoogleProducts from './googleApi/products';

const Config = () => {
    return (
        <>
            <SaveDataGoogleClients />
            <SaveDataGoogleProducts />
        </>
    );
};

export default Config;
