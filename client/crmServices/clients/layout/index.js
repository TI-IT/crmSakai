import React, { useState } from 'react';

const LayoutClientsData = ({ data, filterName }) => {
    return (
        <>
            {data.map((d, id) => (
                <div key={id}>{d.name}</div>
            ))}
        </>
    );
};

export default LayoutClientsData;
