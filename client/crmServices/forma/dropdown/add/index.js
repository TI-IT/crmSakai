import React, { useState, useEffect } from 'react';
import { Dropdown } from 'primereact/dropdown';
import FormAddOneData from '../../addOneData';

function crmDropdown({ server_host, getData, change, rerender }) {
    const [getServerData, setGetServerData] = React.useState([]);
    const [value8, setValue8] = useState(null);
    const [message, setMessage] = useState('');

    useEffect(getAllData, []);

    async function getAllData() {
        const fethUrl = server_host + '/' + getData + '/getAllData';
        await fetch(fethUrl, {
            method: 'get',
            credentials: 'include'
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                if (data.ok) {
                    setGetServerData(data.data);
                    setMessage('Данные получены');
                    rerender(message);
                }
            });
    }

    return (
        <>
            <div className="flex gap-3">
                <div className="w-12">
                    <Dropdown
                        id="dropdown1"
                        options={getServerData}
                        value={value8}
                        onChange={(e) => {
                            setValue8(e.value);
                            change(getData, e.value);
                        }}
                        optionLabel="name"
                    />
                </div>
                <FormAddOneData server_host={server_host} addData={getData} rerender={getAllData} />
            </div>
        </>
    );
}

export default crmDropdown;
