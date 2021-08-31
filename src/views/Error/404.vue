<template>
  <div>
      404页面出错了
      <el-button @click="goBack">返回首页</el-button>
  </div>
</template>

<script>
export default {
    methods:{
        goBack(){
            this.$router.push('/')
        }
    }
}
</script>

<style>

</style>