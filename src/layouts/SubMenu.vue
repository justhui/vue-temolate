<template functional>
  <!-- 函数时组件 -->
  <el-submenu :key="props.menuInfo.path" :index="props.menuInfo.path">
    <template slot="title">
      <i v-if="props.menuInfo.meta.icon" :class="props.menuInfo.meta.icon"></i>
      <span slot="title">{{ props.menuInfo.meta.title }}</span>
    </template>

    <template v-for="item in props.menuInfo.children">
      <!-- 没有子集 -->
      <el-menu-item :key="item.path" :index="item.path" v-if="!item.children">
        <i v-if="item.meta.icon" :class="item.meta.icon"></i>
        <span slot="title">{{ item.meta.title }}</span>
      </el-menu-item>
      <!-- 自己调用自己 -->
      <sub-menu v-else :key="item.path" :menu-info="item"></sub-menu>
    </template>
  </el-submenu>
</template>

<script>
export default {
  props: {
    menuInfo: {
      type: Object,
      default: () => {}
    }
  }
};
</script>
