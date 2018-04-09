<template>
  <el-container>
    <el-header>
      <vblog-menu></vblog-menu>
    </el-header>
    <el-main></el-main>
    <el-footer>
      <vblog-footer></vblog-footer>
    </el-footer>
  </el-container>
</template>

<script>
import vblogMenu from '~/components/menu.vue'
import vblogFooter from '~/components/footer.vue'

export default {
  components: {
    vblogMenu,
    vblogFooter
  }
}
</script>

