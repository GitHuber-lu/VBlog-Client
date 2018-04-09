<template>

<el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item index="1">菜单1</el-menu-item>
  <el-submenu index="2">
    <template slot="title">菜单2</template>
    <el-menu-item index="2-1">选项1</el-menu-item>
    <el-menu-item index="2-2">选项2</el-menu-item>
    <el-menu-item index="2-3">选项3</el-menu-item>
    <el-submenu index="2-4">
      <template slot="title">选项4</template>
      <el-menu-item index="2-4-1">选项1</el-menu-item>
      <el-menu-item index="2-4-2">选项2</el-menu-item>
      <el-menu-item index="2-4-3">选项3</el-menu-item>
    </el-submenu>
  </el-submenu>
  <el-menu-item index="3" >菜单3</el-menu-item>
  <el-menu-item index="4">菜单3</el-menu-item>
</el-menu>


</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style>
.el-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #dcdfe6;
  color: #333;
  text-align: center;
}
.el-header {
  padding: 0;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  height: calc(100vh - 120px);
}
@media screen and (min-width: 768px) {
  .el-footer {
    display: list-item;
  }
}
</style>
