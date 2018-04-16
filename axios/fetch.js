import axios from 'axios';
import Cookie from 'js-cookie';

export function fetch(options) {
    return new Promise((resolve, reject) => {
        const instance = axios.create({
            baseURL: 'http://localhost:1000/api',
            headers: {
                'Token': Cookie.get('TOKEN'),
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            timeout: 5 * 1000
        });
        instance(options)
            .then(response => {
                resolve(response);
            })
            .catch(error => {
                reject(error);
            });
    });
}