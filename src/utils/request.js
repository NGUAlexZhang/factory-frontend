import axios from 'axios'
import router from "../router";
import store from "../store";
import {Message} from "element-ui";

const service = axios.create({
    baseURL: 'http://localhost:3000/api/v1',
    timeout: 5000
})
service.interceptors.request.use(
    config => {
        return config
    },
    err => {
        return Promise.reject(err)
    }
)
service.interceptors.response.use(
    res => {
        const {data} = res;
        console.log(data)
        if (data.msg) {
            if (data.code === 200)
                Message.success(data.msg)
            else Message.error(data.msg)
        }
        return Promise.resolve(data)
    },
    async err => {
        if (err.response.status === 403) {
            const path = location.href.slice(location.href.lastIndexOf('/'))
            if (path !== '/login' && path !== '/register' && store.state.user.logged) {
                await store.dispatch('user/logout')
                await router.replace('/users/login')
            }
        }
        return Promise.reject(err)
    }
)
export default service