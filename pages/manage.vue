<template>
  <div>
    <vblog-sidebar :is-open.sync="open"></vblog-sidebar>
    <mu-appbar color="primary">
      <mu-button icon slot="left" @click="open = !open">
        <mu-icon value="menu"></mu-icon>
      </mu-button>
      管理后台
      <span slot="right">佚名</span>
      <mu-button icon slot="right">
        <mu-icon value="expand_more"></mu-icon>
      </mu-button>
    </mu-appbar>
    <!-- <mu-content-block> -->
      <nuxt-child/>
    <!-- </mu-content-block> -->
  </div>
</template>

<script>
import vblogFooter from '~/components/footer.vue'
import vblogSidebar from '~/components/sidebar.vue'
import vblogBreadcrumb from '~/components/breadcrumb.vue'

export default {
  // middleware: 'auth',
  data() {
    return {
      open: false
    }
  },
  components: {
    vblogSidebar,
    vblogFooter,
    vblogBreadcrumb
  },
  methods: {

  }
}
</script>
<style scoped>
.el-menu-box {
  height: 100vh;
  background-color: rgb(84, 92, 100);
}
.el-main {
  padding: 0;
  height: 100vh;
}
.el-breadcrumb {
  height: 60px;
  line-height: 60px;
  background-color: #eee;
  padding-left: 20px;
  border-bottom: 1px solid #ccc;
}
.el-container {
  padding-bottom: 0;
}
</style>




