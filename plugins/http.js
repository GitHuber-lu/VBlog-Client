import axios from 'axios';
import Cookie from 'js-cookie';
import Qs from 'qs'

axios.defaults.timeout = 5000;
axios.defaults.baseURL = 'http://localhost:9527/api';
// axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'
// axios.defaults.transformRequest = [function (data) {
//   // 这里可以在发送请求之前对请求数据做处理，比如form-data格式化等，这里可以使用开头引入的Qs（这个模块在安装axios的时候就已经安装了，不需要另外安装）
//   return JSON.stringify(data);
// }],


  // axios.create({
  //   baseURL: 'http://localhost:1000/api',
  //   timeout: 5000
  // });

  //http request 拦截器
  axios.interceptors.request.use(
    config => {
      const token = Cookie.get('TOKEN');
      config.data = Qs.stringify(config.data);
      config.headers = {
        'Token': token,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
      // if(token){
      //   config.params = {'token':token}
      // }
      return config;
    },
    error => {
      return Promise.reject(err);
    }
  );


//http response 拦截器
// axios.interceptors.response.use(
//   response => {
//     if(response.data.errCode ==2){
//       router.push({
//         path:"/login",
//         querry:{redirect:router.currentRoute.fullPath}//从哪个页面跳转
//       })
//     }
//     return response;
//   },
//   error => {
//     return Promise.reject(error)
//   }
// )


/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function fetch(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    })
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err)
      })
  })
}


/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err)
      })
  })
}

/**
* 封装patch请求
* @param url
* @param data
* @returns {Promise}
*/

export function patch(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.patch(url, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err)
      })
  })
}

/**
* 封装put请求
* @param url
* @param data
* @returns {Promise}
*/

export function put(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.put(url, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err)
      })
  })
}