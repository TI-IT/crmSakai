import React, { useState, useEffect } from 'react';
import ClientsTable from '../../clients/table';
import Crud from '../../components/crud';
import { get } from '../../models/crud';

const GetClients = ({ server_host }) => {
    const [dbData, setDbData] = useState({});

    useEffect(getAllData, []);

    async function getAllData() {
        const data = await get('data', 'getAllData');
        setDbData(data);
    }
    console.log(dbData.Clients.input);

    return (
        <>
            <Crud dbData={dbData.Clients} />
            {/* <ClientsTable server_host={server_host} dbData={dbData} getAllData={getAllData} /> */}
        </>
    );
};

export default GetClients;
