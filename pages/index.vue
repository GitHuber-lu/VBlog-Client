<template>
  <el-container>
    <el-header>
      <vblog-menu></vblog-menu>
    </el-header>
    <el-main>
      <ul class="article-list">
        <li class="item" v-for="item in articleList" :key="item._id">
          <div class="title">{{item.title}}</div>
          <div class="content">{{item.content}}</div>
        </li>
      </ul>
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
      articleList: []
    }
  },
  methods: {},
  mounted() {
    this.$fetch('/getArticleList').then(res => {
      if (res.code == 'success') {
        this.articleList = res.data
      }
    })
  }
}
</script>
<style scoped>
.article-list{
  padding-left: 0;
}
.article-list .item {
  border: 1px solid #ccc;
  padding: 14px;
  background-color: #fff;
  border-radius: 5px;
  margin-bottom: 20px;
  list-style: none;
}
.article-list .title{
  margin-bottom: 10px;
  font-weight: bolder;
}
</style>

