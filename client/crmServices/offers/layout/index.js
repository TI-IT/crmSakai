import React, { useState } from 'react';

const LayoutProductsSelect = ({ selectData, filterName }) => {
    const [productsTypeProduct, setProductsTypeProduct] = React.useState(null);
    console.log(selectData);
    // setProductsTypeProduct(selectData);
    return (
        <>
            {selectData?.map((d, id) => (
                <div key={id}>{d.productName}</div>
            ))}
        </>
    );
};

export default LayoutProductsSelect;
