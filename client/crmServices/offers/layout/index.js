import React, { useState } from 'react';

const LayoutProductsSelect = ({ selectData }) => {
    return (
        <>
            {selectData?.length}
            {selectData?.map((d, id) => (
                <div key={id}>{d.productName}</div>
            ))}
        </>
    );
};

export default LayoutProductsSelect;
