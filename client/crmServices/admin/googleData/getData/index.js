import React, { useState, useEffect } from 'react';
import Layout from '../layout';
import { get } from '../../../models/crud';

const GetDataOffersTree = ({ server_host }) => {
    const [dbData, setDbData] = useState({});
    useEffect(getAllData, []);

    async function getAllData() {
        const data = await get('data', 'getAllData');
        setDbData(data);
    }

    return (
        <>
            <Layout server_host={server_host} dbData={dbData.Products} />
        </>
    );
};

export default GetDataOffersTree;
