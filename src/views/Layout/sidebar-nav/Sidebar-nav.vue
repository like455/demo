<template>
  <div class="sidebar-nav">
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <MyMenu :list='DynamicRoutes'/>
      </el-menu>
  </div>
</template>

<script>
import MyMenu from "@/components/MyMenu.vue";
import { baseRoutes, DynamicRoutes } from "../../../router";//前台定义的全路由
import { mapState } from "vuex";
export default {
  data() {
    return {
      list: [],
      // routes,
      DynamicRoutes:baseRoutes[0].children
    };
  },
  components: {
    MyMenu,
  },
  computed:{
    ...mapState('routerModule',['menuList'])
  },
  mounted() {
    // console.log(DynamicRoutes);
    // console.log(routes);
    // this.list = routes[0].children;
    // console.log(this.list);
  },
};
</script>

<style lang="scss" scoped>
.sidebar-nav {
  width: 200px;
  height: 100%;
  background: #545c64;
  color: #fff;
}
</style>