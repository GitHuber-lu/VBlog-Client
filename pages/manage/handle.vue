<template>

  <el-row class="p20">
    <el-col :span="16" class="mb-2 pr-2">
      <el-table :data="articalData" size="mini" stripe>
        <el-table-column fixed prop="title" label="标题"></el-table-column>
        <el-table-column label="操作" width="200">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="onEdit(scope.row.id)">编辑</el-button>
            <el-button type="text" size="small" @click="onDelete(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-col>
    <el-col :span="8">

    </el-col>
  </el-row>

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