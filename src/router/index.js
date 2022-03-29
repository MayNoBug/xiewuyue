import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    children:[
      {path:"",name:"xuange",component:()=>import("../views/homes/HomeUser")},
      {path:"2-1",meta:["文章管理","文章列表"],component:()=>import("../views/homes/HomeUser")},
      {path:"2-2",meta:["文章管理","多层级路由示例"],component:()=>import("../views/homes/MyText")},
      {path:"1-1",component:()=>import("../views/homes/HomeIndex")},
    ]
  },
  {
    path:"/login",
    name:"MyLogin",
    component:()=>import("../views/MyLogin.vue")
  },
];

const router = new VueRouter({
  routes,
});
// 权限管理 路由守卫
router.beforeEach(function(to,from,next){
  console.log(to,from)
  if(to.path==="/login"){ //login 没有权限约束
    next()
  }else{
    let token = localStorage.getItem("token")
    if(!token)return next({path:"/login"})
    if(token)return next()
  }
})

export default router;
