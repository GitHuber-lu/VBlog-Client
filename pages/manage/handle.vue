<template>
  <div class="">
    <mu-card v-for="item in articalData" :key="item.id">
      <mu-card-title :title="item.title" :sub-title="item.content"></mu-card-title>
      <mu-card-actions>
        <mu-button flat small color="primary" @click="onEdit(item.id)">
          <mu-icon value="edit"></mu-icon>
          编辑
        </mu-button>
        <mu-button flat small color="success">
          <mu-icon value="grade"></mu-icon>
          分类
        </mu-button>
        <mu-button flat small color="red" @click="onDelete(item.id)">
          <mu-icon value="delete"></mu-icon>
          删除
        </mu-button>
      </mu-card-actions>
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
<style scoped>
  .mu-button{
    margin-right: 8px;
    vertical-align: middle;
  }
  .mu-button .mu-icon{
    margin-right: 4px;
  }
</style>
