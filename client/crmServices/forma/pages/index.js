import React, { useState } from 'react';
import ClientsTable from '../../../crm/clients/table';

const addClients = ({ server_host }) => {
    const [message, setMessage] = useState('');
    return (
        <div>
            <h3>Клиенты</h3>

            {/* <ClientsTable server_host={server_host} rerender={setMessage} /> */}
        </div>
    );
};

export default addClients;
