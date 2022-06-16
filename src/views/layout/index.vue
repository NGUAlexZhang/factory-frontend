<template>
  <el-container>
    <el-aside width="150px">
      <side-bar></side-bar>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
import SideBar from "@/views/layout/side-bar";

export default {
  name: "the-index",
  components: {SideBar}
}
</script>

<style scoped>
</style>
<style>

.el-container {
  width: 100%;
  height: 100%;
}

.el-menu {
  height: 100%;
}

</style>