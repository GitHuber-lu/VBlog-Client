<template>
  <mu-paper>
    <mu-text-field v-model="title" full-width></mu-text-field>
    <ueditor :config="config" ref="ue" class="mb-2"></ueditor>
    <mu-button color="primary" @click="onUpdate">更新</mu-button>
  </mu-paper>
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

