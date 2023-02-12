import React, { useRef, useState } from 'react';
import ShowerRoom from '../../../crmServices/calculator/showerRoom';

const Calculator = ({ dbData, newData, setNewData }) => {
    function changeProducts(name, value) {
        return setNewData({
            ...newData,
            [name]: value
        });
    }

    return (
        <>
            <ShowerRoom />
        </>
    );
};

export default Calculator;
