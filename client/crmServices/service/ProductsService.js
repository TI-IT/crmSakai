import getConfig from 'next/config';
import { get } from '../models/crud';

export class ProductsService {
    constructor() {
        // this.contextPath = getConfig().publicRuntimeConfig.contextPath;
    }
    // getOffersSmall() {
    //     return fetch(this.contextPath + '/demo/data/Offers-small.json', { headers: { 'Cache-Control': 'no-cache' } })
    //         .then((res) => res.json())
    //         .then((d) => d.data);
    // }

    async getProducts() {
        const data = await get('products', 'getAllData');
        return data;
    }
    async getProductTitles() {
        const data = await get('data', 'getAllData');
        return data.Products;
    }
    // async getClients() {
    //     const data = await get('clients', 'getAllData');
    //     return data;
    // }
    // async getClientsTitle() {
    //     const titleObjects = {};
    //     const data = await get('data', 'getAllData');
    //     data.Clients?.input.map((i) => {
    //         titleObjects[i.name] = i.title;
    //     });
    //     data.Clients?.dropdown.map((i) => {
    //         titleObjects[i.name] = i.title;
    //     });
    //     return titleObjects;
    // }

    // getOffersWithOrdersSmall() {
    //     return fetch(this.contextPath + '/demo/data/Offers-orders-small.json', { headers: { 'Cache-Control': 'no-cache' } })
    //         .then((res) => res.json())
    //         .then((d) => d.data);
    // }
}
