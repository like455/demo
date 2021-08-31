<template>
  <div class='main-content'>
      <!-- 右侧顶部导航 -->
      <TopAsider/>
      <!-- 右侧内容区域 -->
      <Container/>
  </div>
</template>

<script>
import TopAsider from "./top-asider.vue";
import Container from "./container.vue";
export default {
    components:{
        TopAsider,
        Container
    }
}
</script>

<style lang="scss" scoped>
.main-content{
    flex: 1;
}
</style>