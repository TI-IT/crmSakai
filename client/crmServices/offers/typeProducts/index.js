import React, { useEffect, useRef, useState } from 'react';
import { OffersService } from '../../../crmServices/service/OffersService';
import CrmDropdown from '../../../crmServices/forma/dropdown/add';
import { AutoComplete } from 'primereact/autocomplete';

const CreateOffer = () => {
    const [autoValue, setAutoValue] = useState(null);
    const [selectedAutoValue, setSelectedAutoValue] = useState(null);
    const [test, setTest] = useState(null);
    const [autoFilteredValue, setAutoFilteredValue] = useState([]);
    const [selectTypeTransaction, setSelectTypeTransaction] = useState([]);
    const [productTitles, setProductTitles] = useState(null);
    const [productsTypeProduct, setProductsTypeProduct] = useState(null);
    const [products, setProducts] = useState(null);
    useEffect(() => {
        getData();
    }, []);

    function getData() {
        const productService = new OffersService();
        //Выподающий список
        productService.getTypeTransaction().then((data) => setAutoValue(data));
        // productService.getProductsTypeProduct(selectedAutoValue).then((data) => setProductsTypeProduct(data));
        productService.getProducts().then((data) => setProducts(data));
    }

    const searchTypeTransaction = (event) => {
        setTimeout(() => {
            if (!event.query.trim().length) {
                setAutoFilteredValue([...autoValue]);
            } else {
                setAutoFilteredValue(
                    autoValue.filter((country) => {
                        return country.name.toLowerCase().startsWith(event.query.toLowerCase());
                    })
                );
            }
        }, 250);
    };
    function Test(value) {
        const select = [];
        if (value) {
            value.map((obj) => {
                select.push(obj.name);
            });
        } else {
            select = [];
        }
        console.log(select);
        setSelectTypeTransaction(select);

        console.log(selectTypeTransaction);
        if (select === selectTypeTransaction) {
        } else {
            // console.log('не ровны');
        }
    }

    if (autoFilteredValue) {
        let select;
        autoFilteredValue.map((obj) => {
            // console.log(obj);
            // select === obj.name ? (select = obj.name) : '';
        });
        // console.log(select);
        // setSelectTypeTransaction(select);
    }
    // console.log(selectTypeTransaction);
    // if (selectedAutoValue) {
    //     const filterProfucts = [];
    //     products.map((obj) => {
    //         console.log(selectedAutoValue.name);
    //         obj.typeTransaction === selectedAutoValue ? filterProfucts.push(obj) : '';
    //     });
    //     console.log(filterProfucts);
    // }

    // console.log(products);
    return (
        <>
            <div className="card p-fluid">
                <div className="formgrid grid  text-left">
                    <div className="field col ">
                        <div className="field">
                            <h5>Вид сделки</h5>
                            <AutoComplete
                                placeholder="Search"
                                id="dd"
                                dropdown
                                multiple
                                value={selectedAutoValue}
                                onChange={(e) => {
                                    setSelectedAutoValue(e.value);
                                    Test(e.value);
                                }}
                                suggestions={autoFilteredValue}
                                completeMethod={searchTypeTransaction}
                                field="name"
                            />

                            {/* <label htmlFor={productTitles.title}>{productTitles.title}</label> */}
                            {/* <CrmDropdown getData={'citys'} server_host={server_host} change={crmDropdownGetObject} rerender={setMessage} /> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CreateOffer;
