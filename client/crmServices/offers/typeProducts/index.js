import React, { useEffect, useRef, useState } from 'react';
import { get, post } from '../../models/crud';
import DropDownListTypeProducts from '../dropDownListTypeProducts';

const TypeProducts = ({ listData }) => {
    const arrayData = [];
    const ObjData = {};
    if (listData) {
        getData();
    }
    async function getData() {
        const res = await post('products', 'postProductsTypeProduct', listData);
        res.map((i) => {
            arrayData.push({ name: i });
        });
    }
    return (
        <>
            <DropDownListTypeProducts listData={arrayData} />
        </>
    );
};

export default TypeProducts;
