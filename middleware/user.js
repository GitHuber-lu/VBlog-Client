import { getToken } from '@/utils/auth'
export default function ({ store, route }) {
    store.dispatch("GetInfo", getToken()).then(res => {
        console.log(res)
    });
}