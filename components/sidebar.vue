<template>
  <div>
    <mu-drawer :open="sidebarOpen" :docked="docked" width="200" right>
      <mu-list @itemClick="isOpen">
        <mu-list-item title="前台首页" to="/" />
        <mu-list-item title="系统信息" to="/manage" />
        <mu-list-item title="新增文章" to="/manage/add" />
        <mu-list-item title="文章管理" to="/manage/handle" />
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