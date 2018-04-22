<template>
  <el-container>
    <vblog-header></vblog-header>
    <el-main>
      <div class="container">
        <el-row :gutter="20">
          <el-col :span="16">
            <div class="grid-content">
              <article-list></article-list>
              <!-- 分页 -->
              <el-pagination class="mt-2" layout="prev, pager, next" :total="1000"></el-pagination>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content" style="background-color:#fff;height:500px;border-radius:5px">
              <div class="p20">
                <!-- 搜索 -->
                <el-input placeholder="Search" v-model="input5" class="input-with-select">
                  <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
                <!-- 留言 -->
                <el-input class="mt-2" type="textarea" :autosize="{ minRows: 4, maxRows: 8}" placeholder="Everything you want to say to me." v-model="textarea3"></el-input>
                <el-button class="mt-1 fr" type="danger" icon="el-icon-success" size="small">发送</el-button>
              </div>
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
import vblogHeader from '~/components/header.vue'
import vblogFooter from '~/components/footer.vue'
import articleList from '~/components/articleList.vue'

export default {
  components: {
    vblogHeader,
    vblogFooter,
    articleList
  },
  data() {
    return {}
  }
}
</script>


