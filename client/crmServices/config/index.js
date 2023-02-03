import React, { useState, useEffect } from 'react';
import SaveDataGoogle from './googleApi';

const Config = () => {
    return (
        <>
            <h2>карточка</h2>
            <SaveDataGoogle />
            {/* <ViewInTable /> */}
        </>
    );
};

export default Config;
