import React, { useEffect, useRef, useState } from 'react';
import { get, post } from '../../models/crud';

const CreateOffer = ({ dbData }) => {
    console.log(dbData);
    return (
        <>
            <div className="card p-fluid">
                <div className="formgrid grid  text-left">
                    <div className="field col ">
                        <table>
                            <thead>
                                <tr>
                                    {/* {titles.map((data, _id) => (
                                        <th key={_id}>
                                            <label htmlFor={data.title}>{data.title}</label>
                                        </th>
                                    ))} */}
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    {/* {dbData?.input.map((data, _id) => (
                                        <td key={_id}>
                                            <InputText id={data.title} type={data.type} name={data.name} onChange={(e) => changeProducts(data.name, e.target.value)} value={newData[data.name]} />
                                        </td>
                                    ))} */}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CreateOffer;
