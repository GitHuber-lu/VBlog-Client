<template>
  <el-container>
    <el-header>
      <vblog-menu></vblog-menu>
    </el-header>
    <el-main>
      <div class="container">
        <div class="article">
          <div class="title">{{title}}</div>
          <div class="content" v-html="content"></div>
        </div>
      </div>
    </el-main>
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
  },
  data() {
    return {
      title: '',
      content: ''
    }
  },
  methods: {},
  mounted() {
    const aid = this.$route.params.id
    if (aid) {
      this.$fetch('/getArticleDetail', {
        id: aid
      }).then(res => {
        if (res.code == 'success') {
          this.title = res.data.title
          this.content = res.data.content
        } else {
          this.$notify.error({
            title: '提示',
            message: '获取文章详情失败',
            duration: 2000
          })
        }
      })
      return
    }
    this.$notify.error({
      title: '提示',
      message: '未获取到文章ID',
      duration: 2000
    })
  }
}
</script>
<style scoped>
.article {
  padding: 20px;
  border-radius: 5px;
  background-color: #fff;
}
.article .title {
  text-align: center;
  font-size: 18px;
  font-weight: bolder;
}
.article .content {
  margin-top: 20px;
}
</style>


