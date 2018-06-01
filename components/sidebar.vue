<template>
  <div>
    <mu-drawer :open="sidebarOpen" :docked="docked" width="200" right>
      <mu-list @itemClick="isOpen">
        <mu-list-item button to="/">
          <mu-list-item-title>前台首页</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button to="/manage">
          <mu-list-item-title>系统信息</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button to="/manage/add">
          <mu-list-item-title>新增文章</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button to="/manage/handle">
          <mu-list-item-title>文章管理</mu-list-item-title>
        </mu-list-item>
      </mu-list>
    </mu-drawer>
  </div>
</template>

<script>
export default {
  props: ['sidebarOpen'],
  data() {
    return {
      docked: false
    }
  },
  methods: {
    isOpen() {
      this.$emit('isopen', false)
    }
  }
}
</script>