import React, { useEffect, useRef, useState } from 'react';
import { OffersService } from '../../../crmServices/service/OffersService';
import { Dropdown } from 'primereact/dropdown';

const Card = () => {
    const [value, setValue] = useState(null);

    const [typeTransaction, setTypeTransaction] = React.useState([]);
    useEffect(() => {
        getData();
    }, []);

    function getData() {
        const newTypeTransaction = new OffersService();
        newTypeTransaction.getTypeTransaction().then((data) => setTypeTransaction(data));
    }
    return (
        <>
            <div className="card p-fluid max-w-30rem h-full">
                <div className="flex gap-3 h-full">
                    <div className="w-10 h-full">
                        <Dropdown
                            showClear={true}
                            // onHide={true}
                            id="dropdown1"
                            placeholder="Выберите Вид сделки"
                            //array[{object.name}]
                            options={typeTransaction}
                            value={value}
                            onChange={(e) => {
                                setValue(e.value);
                            }}
                            optionLabel="name"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;
