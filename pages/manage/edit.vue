<template>
  <el-row class="p20">
    <el-col :span="16" class="mb-2 pr-2">
      <div class="grid-content">
        <el-input class="mb-2" placeholder="请输入内容" v-model="title">
          <template slot="prepend">标题</template>
        </el-input>
        <ueditor :config="config" ref="ue" class="mb-2"></ueditor>
        <el-button type="primary" @click="onUpdate">更新</el-button>
      </div>
    </el-col>
    <el-col :span="8">
      <div class="grid-content">
        <el-dropdown split-button type="primary">
          添加分类
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <el-dropdown-item>双皮奶</el-dropdown-item>
            <el-dropdown-item>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-col>
  </el-row>
</template>
<script>
import ueditor from '../../components/ueditor.vue'
export default {
  components: { ueditor },
  data() {
    return {
      aid: '',
      config: {
        initialFrameWidth: null,
        initialFrameHeight: 350
      },
      title: '',
      content: ''
    }
  },
  methods: {
    onUpdate() {
      this.$post('/updateArticleDetail', {
        id: this.aid,
        title: this.title,
        content: this.$refs.ue.getContent()
      }).then(res => {
        if (res.code == 'success') {
          this.$notify.info({
            title: '提示',
            message: '更新成功',
            duration: 2000
          })
          this.$router.push('/manage/handle')
        }
      })
    },
    getDetail(aid) {
      this.$fetch('/getArticleDetail', {
        id: aid
      }).then(res => {
        this.title = res.data.title
        this.content = res.data.content
      })
    }
  },
  mounted() {
    this.aid = this.$route.query.id
    this.getDetail(this.aid)
    setTimeout(() => {
      this.$refs.ue.setContent(this.content)
    }, 500)
  }
}
</script>

