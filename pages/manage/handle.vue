<template>
  <div class="">
    <mu-card v-for="item in articalData" :key="item.id">
      <mu-card-title :title="item.title" />
      <mu-icon-menu icon="more_vert" :anchorOrigin="rightTop" :targetOrigin="rightTop">
        <mu-menu-item title="编辑" @click="onEdit(item.id)"/>
        <mu-menu-item title="分类" />
        <mu-menu-item title="删除" @click="onDelete(item.id)"/>
      </mu-icon-menu>
    </mu-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articalData: []
    }
  },
  methods: {
    onEdit(aid) {
      this.$router.push({
        path: '/manage/edit',
        query: {
          id: aid
        }
      })
    },
    onDelete(aid) {
      this.$post('/deleteArticle', {
        id: aid
      }).then(res => {
        if (res.code == 'success') {
          this.$notify.info({
            title: '提示',
            message: '删除成功',
            duration: 2000
          })
          this.getArticleList()
        }
      })
    },
    getArticleList() {
      this.$fetch('/getArticleIntroList').then(res => {
        this.articalData = res.data
      })
    }
  },
  created() {
    this.getArticleList()
  }
}
</script>
<style>
.mr-1 {
  margin-right: 10px;
}
</style>
