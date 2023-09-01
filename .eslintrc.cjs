/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules:{
    'prettier/prettier':[
      'warn',
      {
        singleQuote:true,//单引号
        semi:false,//无分号
        printWidth:80,//超过80字符自动换行
        crailingComma:'none',//  对象|数组最后面 是否加逗号
        endOfLine:'auto'//换行符不限制
      }
    ],
    'vue/multi-word-component-names':[
      'warn',{
        ignores:['index'] //vue组件名称规范忽略index
      }
    ],
    'vue/no-setup-props-destructure':['off'], //关闭props解构的校验（props解构丢失响应式）
    'no-undef':'off'//关闭使用未定义变量报错 
  }
}
