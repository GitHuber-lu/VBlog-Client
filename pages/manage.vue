<template>
  <mu-row>
    <mu-col width="100" tablet="100" desktop="100">
      <vblog-sidebar :sidebar-open="isOpen" @isopen="openChange"></vblog-sidebar>
      <mu-appbar title="管理后台">
        <mu-icon-button icon="menu" slot="left" @click="toggleSidebar(true)" />
        <mu-flat-button label="佚名" slot="right" />
        <mu-icon-button icon="expand_more" slot="right" />
      </mu-appbar>
      <mu-content-block>
        <nuxt-child/>
      </mu-content-block>
    </mu-col>
  </mu-row>
</template>

<script>
import vblogFooter from '~/components/footer.vue'
import vblogSidebar from '~/components/sidebar.vue'
import vblogBreadcrumb from '~/components/breadcrumb.vue'

export default {
  data() {
    return {
      isOpen: false
    }
  },
  components: {
    vblogSidebar,
    vblogFooter,
    vblogBreadcrumb
  },
  methods: {
    toggleSidebar(flag) {
      this.isOpen = flag
    },
    openChange(msg) {
      this.isOpen = msg
    }
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




