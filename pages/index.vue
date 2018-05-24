<template>
  <div class="main">
    <div class="main-header">
      <vblog-header></vblog-header>
    </div>
    <div class="main-body">
      <div class="container">
        <article-list></article-list>
        <vblog-sidebar></vblog-sidebar>
      </div>
    </div>
    <div class="main-footer">
      <vblog-footer></vblog-footer>
    </div>
  </div>
</template>

<script>
import vblogHeader from '~/components/header.vue'
import vblogFooter from '~/components/footer.vue'
import articleList from '~/components/articleList.vue'
import vblogSidebar from '~/components/sidebar.vue'

export default {
  components: {
    vblogHeader,
    vblogFooter,
    articleList,
    vblogSidebar
  },
  data() {
    return {}
  }
}
</script>
<style>

</style>



