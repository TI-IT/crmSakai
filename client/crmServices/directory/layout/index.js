import React, { useState } from 'react';

const LayoutDirectoryData = ({ data }) => {
    const typeTransaction = data.typeTransaction;
    const typeProduct = data.typeProduct;
    return (
        <>
            {typeTransaction?.map((d, id) => (
                <div key={id}>
                    <div>{d.name}</div>
                </div>
            ))}
            <br></br>
            {typeProduct?.map((d, id) => (
                <div key={id}>
                    <div>{d.name}</div>
                </div>
            ))}
        </>
    );
};

export default LayoutDirectoryData;
