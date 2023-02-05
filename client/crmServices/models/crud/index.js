import { server_host } from '../../services/host';

export async function get(nameData, method) {
    let getData = [];
    await fetch(server_host + '/' + nameData + '/' + method, {
        method: 'get',
        credentials: 'include'
    })
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            if (data.ok) {
                Object.assign(getData, data.data);
            }
        });
    return getData;
}
export async function getId(nameData, method) {
    const data = await fetch(server_host + '/' + nameData + '/' + method, {
        method: 'get',
        credentials: 'include'
    })
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            if (data.ok) {
                return data.data;
            }
        });
    return data;
}

export async function post(nameData, method, data) {
    const fetchData = data;
    try {
        const res = await fetch(server_host + '/' + nameData + '/' + method, {
            method: 'post',
            credentials: 'include',
            body: JSON.stringify(fetchData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();
        if (data.ok) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        return error;
    }
}
