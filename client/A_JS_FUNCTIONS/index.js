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

//----------------------------------------------------------MONGOOSE
//Получить только id
const data = await collection.find({}, { id: 1 });

//Получить по выбарке
async function getClientByEmailAndPassword(client) {
    await dbConnect();
    const collection = mongoose.model('clients');

    const doc = await collection.findOne({ email: client.email, password: client.password });
    return doc;
}

// Иногда бывает необходимо получить какие то конкретные поля из документов. В этом случае запрос выглядит так:

db.users.find({}, { username: 1, email: 1 });

// В итоге получим всех пользователей только с полями «username» и «email» + поле "_id", которое возращается всегда по умолчанию. Если поле "_id" или какое-либо другое не нужно, мы можем это указать вот так:

db.users.find({}, { username: 1, email: 1, _id: 0 });
