<template>
  <div>
    <el-container>
      <!-- 头部区域 -->
      <el-header>Header</el-header>

      <el-container>
        <!-- 侧边导航菜单  -->
        <el-aside width="200px">
          <sider-menu></sider-menu>
        </el-aside>

        <!-- 内容区域 -->
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import SiderMenu from "./SiderMenu";
export default {
  data() {
    return {};
  },
  components: {
    SiderMenu
  }
};
</script>

<style>
.el-header {
  background-color: rgb(16, 3, 41);
}
.el-aside {
  overflow: hidden;
}
</style>
