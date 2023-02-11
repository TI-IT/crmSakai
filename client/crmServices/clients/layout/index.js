import React, { useState } from 'react';

const LayoutProductsData = ({ data }) => {
    return (
        <>
            {data.map((d, id) => (
                <div key={id}>{d.name}</div>
            ))}
        </>
    );
};

export default LayoutProductsData;
