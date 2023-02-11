import React, { useState } from 'react';

const LayoutDirectoryData = ({ data }) => {
    const typeTransaction = data.typeTransaction;
    const typeProduct = data.typeProduct;
    const catalog = data.catalog;
    const categoryProduct = data.categoryProduct;
    const categoryChildrenProduct = data.categoryChildrenProduct;
    const finishingProduct = data.finishingProduct;
    const supplierProduct = data.supplierProduct;
    const unit = data.unit;
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
            <br></br>
            {catalog?.map((d, id) => (
                <div key={id}>
                    <div>{d.name}</div>
                </div>
            ))}
            <br></br>
            {categoryProduct?.map((d, id) => (
                <div key={id}>
                    <div>{d.name}</div>
                </div>
            ))}
            <br></br>
            {categoryChildrenProduct?.map((d, id) => (
                <div key={id}>
                    <div>{d.name}</div>
                </div>
            ))}
            <br></br>
            {finishingProduct?.map((d, id) => (
                <div key={id}>
                    <div>{d.name}</div>
                </div>
            ))}
            <br></br>
            {finishingProduct?.map((d, id) => (
                <div key={id}>
                    <div>{d.name}</div>
                </div>
            ))}
            <br></br>
            {supplierProduct?.map((d, id) => (
                <div key={id}>
                    <div>{d.name}</div>
                </div>
            ))}
            <br></br>
            {unit?.map((d, id) => (
                <div key={id}>
                    <div>{d.name}</div>
                </div>
            ))}
        </>
    );
};

export default LayoutDirectoryData;
