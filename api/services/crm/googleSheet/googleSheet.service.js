async function getAllGoogleSheeds(dataName) {
  let url = `https://script.google.com/macros/s/AKfycbyEC1qGLbecENQk-BhgcIWkVcnzjNWKsKZJ9W0JhYJUUQHi8t4ejf6QDdJVPW3-RZ7D/exec?${dataName}=all`;

  const data = fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });
  return data;
}

async function getAllDataGoogleJson(dataName) {
  try {
    data = getAllGoogleSheeds(dataName);
    return data;
  } catch (error) {}
}

module.exports = {
  getAllDataGoogleJson,
};
