
export default function ({ store, redirect }) {
    const token = store.state.token;
    console.log('!!!',store)
    if (!token) {
        return redirect('/login')
    }else{
        store.dispatch("GetInfo", token).then(res => {
            console.log(res)
        });
    }
}