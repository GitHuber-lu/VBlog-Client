<template>
  <el-header>
    <div class="container">
      <a href="/"><img class="logo" src="/images/logo.png" /></a>
      <vblog-menu></vblog-menu>
      <nuxt-link :to="{name:'login'}">登录</nuxt-link>
    </div>
  </el-header>
</template>

<script>
import vblogMenu from '~/components/menu.vue'
export default {
  components: {
    vblogMenu
  },
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style>
.logo {
  height: 50px;
}
</style>
