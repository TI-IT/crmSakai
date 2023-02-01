import React, { useState, useEffect } from 'react';
import Layout from '../layout';

const getDataOffers = ({ server_host }) => {
    const [dbData, setDbData] = useState({});
    useEffect(getAllData, []);
    async function getAllData() {
        //********************************** адрес запроса */
        await fetch(server_host + '/data/getAllData', {
            method: 'get',
            credentials: 'include'
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                if (data.ok) {
                    setDbData(data.data);
                }
            });
    }
    return (
        <>
            <Layout server_host={server_host} dbData={dbData.Offer} />
        </>
    );
};

export default getDataOffers;
