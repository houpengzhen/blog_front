import axios from 'axios'
import Element from 'element-ui'
import router from './router'
import store from './store'

axios.defaults.baseURL = "http://localhost:8089"

// 前置拦截
axios.interceptors.request.use(config =>{
    return config;
})

axios.interceptors.response.use(response =>{
    let res = response.data;
    // console.log("================================");
    // console.log(res);
    // console.log("================================");

    if(res.code === "10000"){
        return response;
    }else{
        Element.Message.error(res.msg);

        return Promise.reject(response.data.msg);

    }

},
error =>{
    if(error.response.data){
        error.message = error.response.data.msg;
    }
    // console.log(error)
    if(error.response.status === "401"){
        store.commit("REMOVE_INFO");
        router.push("/login");
    }else{
        Element.Message.error(error.message);
        return Promise.reject(error);
    }
}
)
