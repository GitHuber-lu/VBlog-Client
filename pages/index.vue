<template>
  <el-container>
    <el-header>
      <vblog-menu></vblog-menu>
    </el-header>
    <el-main>
      <div class="container">
        <el-row :gutter="20">
          <el-col :span="16">
            <div class="grid-content">
              <article-list></article-list>
              <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
              </el-pagination>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content" style="background-color:#fff;height:500px;border-radius:5px">
              
            </div>
          </el-col>
        </el-row>
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
import articleList from '~/components/articleList.vue'

export default {
  components: {
    vblogMenu,
    vblogFooter,
    articleList
  },
  data() {
    return {}
  },
  methods: {}
}
</script>


