import React, { useRef, useState } from 'react';
import CrmDropdown from '../../forma/dropdown/add';
import { useRouter } from 'next/router';

const TableDropdown = ({ server_host, dbData, newData, setNewData }) => {
    const [message, setMessage] = useState('');
    const toast = useRef();
    const router = useRouter();

    function crmDropdownGetObject(name, obj) {
        return setNewData({
            ...newData,
            [name]: obj.name
        });
    }

    return (
        <>
            <div className="grid p-fluid text-left">
                {dbData?.dropdown.map((data, _id) => (
                    <div key={_id} className="field ml-3 md:col-2">
                        <label htmlFor={data.title}>{data.title}</label>
                        <CrmDropdown getData={data.name} server_host={server_host} change={crmDropdownGetObject} rerender={setMessage} />
                    </div>
                ))}
            </div>
        </>
    );
};

export default TableDropdown;
