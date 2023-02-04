// const fs = require('fs');
// const path = require('path');

// const dataNameArray = ['products', 'clients'];

// dataNameArray.map((i) => {
//   const filePath = path.resolve(__dirname, `../../../data/getAllGoogle${i}.json`);
//   fs.readFile(filePath, function (err, data) {
//     if (err) {
//       connectData(i);
//     }
//   });
// });

// function saveData(data) {
//   dataNameArray.map((i) => {
//     fs.writeFile(`./data/getAllGoogle${i}.json`, JSON.stringify(data), (err) => {
//       if (err) console.log('Error');
//     });
//   });
// }

// async function getAllGoogleSheeds(dataName) {
//   let url = `https://script.google.com/macros/s/AKfycbyEC1qGLbecENQk-BhgcIWkVcnzjNWKsKZJ9W0JhYJUUQHi8t4ejf6QDdJVPW3-RZ7D/exec?${dataName}=all`;

//   const data = fetch(url)
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       return data;
//     });
//   return data;
// }

// async function connectData(dataName) {
//   const data = await getAllGoogleSheeds(dataName);
//   saveData(data);
// }

// async function getAllDataGoogleJson(dataName) {
//   try {
//     data = require('../../../data/getAllGoogle' + dataName + '.json');
//     return data;
//   } catch (error) {
//     await connectData(dataName);
//     data = require('../../../data/getAllGoogle' + dataName + '.json');
//     return data;
//   }
// }

// async function updateAllDataGoogle(dataName) {
//   const data = await getAllGoogleSheeds(dataName);
//   return data;
// }

// module.exports = {
//   getAllDataGoogleJson,
//   updateAllDataGoogle,
// };
