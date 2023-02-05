import getConfig from 'next/config';
import { get } from '../models/crud';

async function getAllData() {
    const data = await get('data', 'getAllData');
    setDbData(data.Clients.input);
}

export class ClientsService {
    constructor() {
        this.contextPath = getConfig().publicRuntimeConfig.contextPath;
    }

    getProductsSmall() {
        return fetch(this.contextPath + '/demo/data/products-small.json', { headers: { 'Cache-Control': 'no-cache' } })
            .then((res) => res.json())
            .then((d) => d.data);
    }

    async getProducts() {
        const data = await get('clients', 'getAllData');
        return data;
    }
    async getClients() {
        const data = await get('clients', 'getAllData');
        return data;
    }
    async getClientsTitle() {
        const titleObjects = {};
        const data = await get('data', 'getAllData');
        data.Clients?.input.map((i) => {
            titleObjects[i.name] = i.title;
        });
        data.Clients?.dropdown.map((i) => {
            titleObjects[i.name] = i.title;
        });
        return titleObjects;
    }

    getProductsWithOrdersSmall() {
        return fetch(this.contextPath + '/demo/data/products-orders-small.json', { headers: { 'Cache-Control': 'no-cache' } })
            .then((res) => res.json())
            .then((d) => d.data);
    }
}
