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
const [dbData, setDbData] = useState([]);
async function getAllApiData() {
    const data = await get('data', 'getAllData');
    setDbData(data);
}
async function fetchAddNewDataGoogle(data) {
    const res = await post('products', 'addAllDataGoogle', data);
    // setMessage(res);
}
async function update(client) {
    await dbConnect();
    const collection = mongoose.model('clients');
    await collection.findOneAndUpdate({ id: client.id }, client);
}
//---------------------------------------- create TITLE
async function getAllApiData() {
    const titleObjects = {};
    const data = await get('data', 'getAllData');
    data.Clients?.input.map((i) => {
        titleObjects[i.name] = i.title;
    });
    data.Clients?.dropdown.map((i) => {
        titleObjects[i.name] = i.title;
    });
    setTitles(titleObjects);
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
//SELECT NAMES
async function getProductsTypeProduct(select) {
    await dbConnect();
    const collection = mongoose.model('products');
    const data = await collection.find({ $or: [{ typeTransaction: select.typeTransaction }, { typeProduct: select.typeProduct }] }, function (err, docs) {
        if (!err) res.send(docs);
    });
    return data;
}

// Иногда бывает необходимо получить какие то конкретные поля из документов. В этом случае запрос выглядит так:

db.users.find({}, { username: 1, email: 1 });

// В итоге получим всех пользователей только с полями «username» и «email» + поле "_id", которое возращается всегда по умолчанию. Если поле "_id" или какое-либо другое не нужно, мы можем это указать вот так:

db.users.find({}, { username: 1, email: 1, _id: 0 });

//----------------------------------------------------------Уникальное значение
if (arraySelectData) {
    typeProduct = Array.from(new Set(arraySelectData));
}

const array = [1, 2, 1, 2, 3, 4, 5, 2, 4, 1, 1, 6];
const getUnique = (arr) => {
    return arr.filter((el, ind) => ind === arr.indexOf(el));
};
