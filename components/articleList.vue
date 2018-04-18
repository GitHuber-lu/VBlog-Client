<template>
  <ul class="article-list">
    <li class="item" v-for="item in articleList" :key="item._id">
      <div class="top">
        <nuxt-link class="title" :to="{name:'article-id',params:{ id: item.id }}">{{item.title}}</nuxt-link>
        <p class="content">{{item.content}}</p>
      </div>
      <div class="down">
        <ul class="info">
          <li>
            <i class="el-icon-edit"></i>
            <span class="txt">Bingo</span>
          </li>
          <li>
            <i class="el-icon-time"></i>
            <span class="txt">2018.08.08</span>
          </li>
          <li>
            <i class="el-icon-view"></i>
            <span class="txt">120</span>
          </li>
        </ul>
        <nuxt-link class="link" :to="{name:'article-id',params:{ id: item.id }}">
          <i class="el-icon-menu"></i>
          <span clas="txt">阅读</span>
        </nuxt-link>
      </div>
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
  display: flex;
  flex-direction: column;
  border-top: 1px dashed #ccc;
  background-color: #fff;
  list-style: none;
  min-height: 180px;
  justify-content: space-between
}
.article-list .item:first-child {
  border-top: none;
}
.article-list .title {
  font-weight: bolder;
}
.article-list .content {
  font-size: 14px;
  line-height: 24px;
  margin-top: 10px;
}
.article-list .item > a {
  text-decoration: none;
  color: #333;
}
.article-list .info li {
  display: inline-block;
  vertical-align: middle;
  padding: 0 20px;
}
.article-list .down {
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: #f5f7fa;
  line-height: 30px;
  font-size: 12px;
}
.article-list .top {
  padding: 14px;
}
.article-list i {
  margin-right: 6px;
  vertical-align: middle;
}
.article-list .txt {
  vertical-align: middle;
  font-weight: 500;
}
.article-list .down .link {
  padding-right: 20px;
}
</style>


