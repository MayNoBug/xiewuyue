import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)  
let store= new Vuex.Store({
    state:{count:0},   //存放数据的
    mutations:{  //存放用户提交的方法    = 业务
        increment(state,payload){
            // 每个木图同事的第一个参数就是state本身
            console.log(payload)
            state.count=state.count+1
        },
        decrement(state,payload){
            console.log(payload)
            state.count=state.count - 1
        }
    },
    actions:{
        asyuncincrement(context,payload){
            // 存放异步的  提交mutation
            // 每个action的参数是store
            console.log(payload)
            setTimeout(function(){
                context.commit("increment",payload)
            },2000)
        }
    }
})
export default store