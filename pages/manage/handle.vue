<template>
  <div>
    <mu-paper :z-depth="2">
      <mu-list v-for="item in articalData" :key="item.id">
        <mu-list-item>
          <mu-list-item-content>
            <mu-list-item-title>{{item.title}}</mu-list-item-title>
          </mu-list-item-content>
          <mu-list-item-action>
            <mu-menu cover placement="bottom-end">
              <mu-button icon>
                <mu-icon value="more_vert"></mu-icon>
              </mu-button>
              <mu-list slot="content">
                <mu-list-item button @click="onEdit(item.id)">
                  <mu-list-item-title>编辑</mu-list-item-title>
                </mu-list-item>
                <mu-list-item button>
                  <mu-list-item-title>分类</mu-list-item-title>
                </mu-list-item>
                <mu-list-item button>
                  <mu-list-item-title  @click="onDelete(item.id)">删除</mu-list-item-title>
                </mu-list-item>
              </mu-list>
            </mu-menu>
          </mu-list-item-action>
        </mu-list-item>
        <mu-divider shallow-inset></mu-divider>
      </mu-list>
    </mu-paper>
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
.mu-button {
  margin-right: 8px;
  vertical-align: middle;
}
.mu-button .mu-icon {
  margin-right: 4px;
}
</style>
