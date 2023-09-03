import axios from 'axios'
import {ELMessage} from 'element-plus'
import { useUserStore } from '../stores/modules/user'
import router from '../router'
const baseURL = 'http://big-event-vue-api-t.itheima.net'

//创造实例
const instance = axios.create({
  baseURL,
  timeout: 3000
})
//请求拦截
instance.interceptors.request.use(
  (config)=>{
    //携带token
    const useStore = useUserStore()
    if(useStore.token){
      config.headers.Authorization = useStore.token
    }
    return config
  },(err)=>Promise.reject(err)
)
//响应拦截
instance.interceptors.response.use(
  (res)=>{
    //处理业务
    if(res.data.code ===0)
    return res

    ELMessage.error(res.data.message || '服务异常')
  },
  (err)=>{
    if(err.response?.status===401){
      router.push('/login')
    }

//默认情况
    ELMessage.error(err.response.data.message || '服务异常')
    return Promise.reject(err)
  }
)

export default instance

export {baseURL}