<template>
  <mu-paper>
    <mu-text-field class="my-2" placeholder="请输入标题" full-width v-model="title"></mu-text-field>
    <ueditor :defaultMsg="defaultMsg" :config="config" ref="ue" class="mb-2"></ueditor>
    <mu-button @click="publishArticle" color="primary">发布</mu-button>
    <mu-dialog title="提示" width="360" :open.sync="openSimple">
      发布文章成功
      <mu-button slot="actions" flat color="primary" @click="openSimple = false">关闭</mu-button>
    </mu-dialog>
  </mu-paper>
</template>
<script>
import ueditor from "../../components/ueditor.vue";
export default {
  components: { ueditor },
  data() {
    return {
      openSimple:false,
      defaultMsg: "",
      config: {
        initialFrameWidth: null,
        initialFrameHeight: 350
      },
      title: ""
    };
  },
  methods: {
    openSimpleDialog(){
      this.openSimple = true;
    },
    publishArticle() {
      this.$put("/publishArticle", {
        title: this.title,
        content: this.getContent()
      }).then(res => {
        this.openSimpleDialog()
      });
    },
    getContent() {
      return this.$refs.ue.getContent();
    }
  }
};
</script>

