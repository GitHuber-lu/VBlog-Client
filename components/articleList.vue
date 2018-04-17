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
    };
  },
  mounted() {
    this.$fetch("/getArticleIntroList").then(res => {
      if (res.code == "success") {
        this.articleList = res.data;
      }
    });
  }
};
</script>
<style scoped>
.article-list {
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
.article-list .title {
  margin-bottom: 10px;
  font-weight: bolder;
}
.article-list .item > a {
  text-decoration: none;
  color: #333;
}
</style>


