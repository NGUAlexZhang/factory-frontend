<template>
  <el-menu
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :default-active="this.$route.path"
      router
  >
    <el-menu-item index="/customer">
      <i class="el-icon-menu"></i>
      <span slot="title">客户</span>
    </el-menu-item>
    <el-menu-item index="/commodity">
      <i class="el-icon-menu"></i>
      <span slot="title">商品</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "headBar",

}
</script>

<style scoped>

</style>