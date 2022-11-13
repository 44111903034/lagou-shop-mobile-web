import axios from 'axios'
import store from '../store'

const request = axios.create({
  baseURL: 'https://shop.fed.lagounews.com/api'
})

// 在请求拦截器中进行 token 设置
request.interceptors.request.use(config => {
  // 获取 token
  const { user } = store.state
  if (user) {
    // 设置请求头
    config.headers.Authorization = 'Bearer' + user
  }
  return config
})
export default request
