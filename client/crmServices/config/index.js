import React, { useState, useEffect } from 'react';
import SaveDataGoogle from './googleApi/';

const Config = () => {
    return (
        <>
            <SaveDataGoogle nameData={'clients'} />
            <SaveDataGoogle nameData={'products'} />
            <SaveDataGoogle nameData={'directory'} />
        </>
    );
};

export default Config;
