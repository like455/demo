<template>
  <div class="layout">
      <SidebarNav/>
      <MainContent/>
  </div>
</template>

<script>
import SidebarNav from "./sidebar-nav/Sidebar-nav.vue";
import MainContent from "./main-cintent";
export default {
  components:{
    SidebarNav,
    MainContent
  }
}
</script>

<style lang="scss" scoped>
.layout{
  display: flex;
  height: 100%;
}
</style>