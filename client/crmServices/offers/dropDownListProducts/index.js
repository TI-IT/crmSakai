import React, { useEffect, useRef, useState } from 'react';
import { OffersService } from '../../../crmServices/service/OffersService';

const CreateOffer = () => {
    const [productTitles, setProductTitles] = useState(null);
    const [products, setProducts] = useState(null);
    useEffect(() => {
        updateClients();
    }, []);

    function updateClients() {
        const productService = new OffersService();
        productService.getProductTitles().then((data) => setProductTitles(data));
        productService.getProducts().then((data) => setProducts(data));
    }
    const openNew = () => {
        router.push('/crm/clients/addClients/');
    };
    // console.log(products);
    if (!productTitles) {
        return <>Загрузка...</>;
    } else {
        return (
            <>
                <div className="card p-fluid">
                    <div className="formgrid grid  text-left">
                        <div className="field col ">
                            <table>
                                <thead>
                                    <tr>
                                        {productTitles.input.map((data, _id) => (
                                            <th key={_id}>
                                                <label htmlFor={data.title}>{data.title}</label>
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        {/* {products?.map((data, _id) => (
                                            <td key={_id}>
                                                <InputText id={data.title} type={data.type} name={data.name} onChange={(e) => changeProducts(data.name, e.target.value)} value={newData[data.name]} />
                                            </td>
                                        ))} */}
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default CreateOffer;
