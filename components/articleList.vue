<template>
  <ul class="article-list">
    <li class="item" v-for="item in articleList" :key="item._id">
      <nuxt-link :to="{name:'article-id',params:{ id: item.id }}">
        <div class="title">{{item.title}}</div>
        <div class="content">{{item.content}}</div>
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      articleList: []
    }
  },
  mounted() {
    this.$fetch('/getArticleIntroList').then(res => {
      if (res.code == 'success') {
        this.articleList = res.data
      }
    })
  }
}
</script>
<style scoped>
.article-list {
  padding-left: 0;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 0;
}
.article-list .item {
  border-top: 1px dashed #ccc;
  padding: 14px;
  background-color: #fff;
  list-style: none;
  min-height: 180px;
}
.article-list .item:first-child {
  border-top: none;
}
.article-list .title {
  margin-bottom: 10px;
  font-weight: bolder;
}
.article-list .content {
  font-size: 14px;
}
.article-list .item > a {
  text-decoration: none;
  color: #333;
}
</style>


