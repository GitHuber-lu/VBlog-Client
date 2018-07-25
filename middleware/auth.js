// import { getToken } from '@/utils/auth'
export default function ({ store, redirect, route }) {
    const token = store.state.token;
    console.log('~~~~~~', route)
    if (!token) {
        return redirect('/login')
    } else {
        // store.dispatch("GetInfo", getToken()).then(res => {
        //     console.log(res)
        // });
    }
}