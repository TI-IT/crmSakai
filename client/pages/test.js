import React, { useState, useEffect } from 'react';
import { get } from '../crmServices/models/crud';

const Test = ({ server_host }) => {
    const [dbData, setDbData] = useState({});
    useEffect(getAllData, []);

    async function getAllData() {
        const data = await get('data', 'getAllData');
        // setDbData();
    }

    return (
        <>
            <h1>TEST</h1>
        </>
    );
};

export default Test;
