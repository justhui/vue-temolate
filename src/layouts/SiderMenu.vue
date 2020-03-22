<template>
  <div>
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
    <el-menu
      default-active="/dashboard/analysis"
      :collapse="isCollapse"
      :collapse-transition="false"
      unique-opened
      router
    >
      <template v-for="item in menuData">
        <!-- 没有子集渲染 -->
        <el-menu-item v-if="!item.children" :index="item.path" :key="item.path">
          <i v-if="item.meta.icon" :class="item.meta.icon"></i>
          <span slot="title">{{ item.meta.title }}</span>
        </el-menu-item>
        <!-- 有子集递归 -->
        <sub-menu v-else :key="item.path" :menu-info="item"></sub-menu>
      </template>
    </el-menu>
  </div>
</template>

<script>
import SubMenu from "./SubMenu";
import { check } from "../utils/auth";
export default {
  data() {
    const menuData = this.getMenuData(this.$router.options.routes);
    return {
      menuData,
      isCollapse: false
    };
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },
    // 递归数据进行处理和判断
    getMenuData(routes = []) {
      const menuData = [];
      for (let item of routes) {
        if (item.meta && item.meta.authority && !check(item.meta.authority)) {
          continue;
        }
        if (item.name && !item.hideInMenu) {
          const newItem = { ...item };
          delete newItem.children;
          if (item.children && !item.hideChildrenInMenu) {
            newItem.children = this.getMenuData(item.children);
          } else {
            this.getMenuData(item.children);
          }
          menuData.push(newItem);
        } else if (
          !item.hideInMenu &&
          !item.hideChildrenInMenu &&
          item.children
        ) {
          menuData.push(...this.getMenuData(item.children));
        }
      }
      return menuData;
    }
  },
  components: {
    SubMenu
  }
};
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>
