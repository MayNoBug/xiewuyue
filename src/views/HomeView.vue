<template>
  <div class="home">
    <el-header style="background:#0079d9">
      <p class="p-style">ElementUi管理后台</p>
    </el-header>
    <el-container>
      <el-aside style="background: rgb(50, 64, 87)" class="aside">
        <el-menu background-color="rgb(50,64,87)" text-color="#fff" :router="true">
          <!-- 1级菜单 -->
          <el-menu-item class="item1" index="1-1">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <!-- 2级菜单 -->
          <el-submenu index="2" class="item">
            <template slot="title">
              <i class="el-icon-document-remove"></i>
              <span>文章管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1"> 文章列表 </el-menu-item>
              <el-menu-item index="2-2"> 多层级路由示例 </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header class="header">
          <!-- 面包屑 -->
          <div>
            <el-breadcrumb separator="/">
              <el-breadcrumb-item>首页</el-breadcrumb-item>
              <el-breadcrumb-item v-for="(item,index) in this.$route.meta" :key="index">{{item}}</el-breadcrumb-item>
            </el-breadcrumb>
          </div>

          <!-- 图像下拉 -->
          <div>
            <el-dropdown>
              <img src="@/assets/logo.png" alt="" class="img" />
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>首页</el-dropdown-item>
                <el-dropdown-item>退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-header>
        <el-main>
          <!-- 二级路由出口组件 -->
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {
  },
  meta:["首页"],
  mounted() {},
};
</script>

<style scoped>
.p-style{
  color:#fff;
  line-height:60px;
}
.aside {
  height: 100vh;
}
.aside .item1 {
  background: rgb(69, 50, 87);
  color: #fff;
}
.aside .item {
  background: rgb(50, 64, 87);
}
.aside .item:hover {
  background: #200404;
}
.aside .item span {
  color: #fff;
}
img {
  width: 36px;
  height: 36px;
  border-radius: 50%;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background:#eff2f7;
}
</style>
