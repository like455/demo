<template>
  <div>
    <template v-for="(item, index) in list">
      <!-- 有下拉的导航 -->
      <el-submenu
        :index="item.name"
        :key="index"
        v-if="item.children && item.children.length > 0"
      >
        <template slot="title">
          <i class="iconfont" :class="item.meta.icon"></i>
          <span>{{ item.meta.name }}</span>
        </template>
        <el-menu-item-group>
          <!-- 再次遍历数组children数据  -->
          <my-menu :list="item.children"></my-menu>
        </el-menu-item-group>
      </el-submenu>
      <!-- 没有下拉的导航 -->
      <el-menu-item
        :index="item.name"
        :key="index"
        @click="gotoPage(item.name)"
        v-else
      >
        <i class="iconfont" :class="item.meta.icon"></i>
        <span slot="title">{{ item.meta.name }}</span>
      </el-menu-item>
    </template>
  </div>
</template>

<script>
export default {
  name: "my-menu",
  props: {
    list: {
      type: Array,
      defult: function () {
        return [];
      },
    },
  },
  methods: {
    //挑战路由
    gotoPage(name) {
      this.$router.push({ name });
    },
  },
};
</script>

<style>
</style> 