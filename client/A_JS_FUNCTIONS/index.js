//------------------------------------------------ TYPEOF
console.log(typeof 42);
// Expected output: "number"

//------------------------------------------------  ROUTER
import { useRouter } from 'next/router';
const router = useRouter();
router.push('/crm/products/');

//-------------------------------------------------- CRUD

import { get, post } from '../../models/crud';
//--------------------Получить данные с Api
async function getAllApiData() {
    const data = await get('data', 'getAllData');
    setDbData(data);
}
async function fetchAddNewDataGoogle(data) {
    console.log(data);
    const res = await post('products', 'addAllDataGoogle', data);
    console.log(res);
    // setMessage(res);
}
