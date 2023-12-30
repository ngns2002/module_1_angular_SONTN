// post 7
import fetch from 'node-fetch';

function fetchDataFromAPI(apiURL: string): Promise<any> {
    return new Promise((resolve, reject) => {
        fetch(apiURL)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error ${response.status}: ${response.statusText}`);
                }
                return response.json();
            })
            .then(data => {
                resolve(data);
            })
            .catch(error => {
                reject(error);
            });
    });
}
const apiUrl = 'http://localhost:3000/user';

fetchDataFromAPI(apiUrl)
    .then(data => {
        console.log('Dữ liệu từ API:', data);
    })
    .catch(error => {
        console.error('Lỗi khi gọi API:', error);
    });