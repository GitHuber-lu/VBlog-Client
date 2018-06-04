<template>
  <mu-paper>
    <mu-text-field class="my-2" placeholder="请输入标题" full-width v-model="title"></mu-text-field>
    <ueditor :defaultMsg="defaultMsg" :config="config" ref="ue" class="mb-2"></ueditor>
    <mu-button @click="publishArticle" color="primary">发布</mu-button>
  </mu-paper>
</template>
<script>
import ueditor from '../../components/ueditor.vue'
export default {
  components: { ueditor },
  data() {
    return {
      defaultMsg: '',
      config: {
        initialFrameWidth: null,
        initialFrameHeight: 350
      },
      title: ''
    }
  },
  methods: {
    publishArticle() {
      this.$put('/publishArticle', {
        title: this.title,
        content: this.getContent()
      }).then(res => {
        this.$notify.info({
          title: '提示',
          message: '发布成功',
          duration: 2000
        })
      })
    },
    getContent() {
      return this.$refs.ue.getContent()
    }
  }
}
</script>

