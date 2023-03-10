import React, { useState } from 'react';

const LayoutProductsData = ({ data }) => {
    return (
        <>
            {data.map((d, id) => (
                <div key={id}>{d.productName}</div>
            ))}
        </>
    );
};

export default LayoutProductsData;
