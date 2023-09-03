import { defineStore } from 'pinia'

//用户模块  token setToken removeToken
export const useUserStore = defineStore('user',()=>{
  const token = ref('')
  const setToken = (newToken)=>{
    token.value = newToken
  }
  const removeToken = ()=>{
    token.value = ''
  }

  return{
    token,
    setToken,
    removeToken
  },{
    persist :true
  }
})