<template>
  <div>
    <el-input class="mb-2" placeholder="请输入内容">
      <template slot="prepend">标题</template>
    </el-input>
    <vblog-ueditor :defaultMsg="defaultMsg" :config="config" ref="ue"></vblog-ueditor>
  </div>
</template>
<script>
import vblogUeditor from "../../components/ue.vue";
export default {
  components: { vblogUeditor },
  data() {
    return {
      defaultMsg: "这里是UE测试",
      config: {
        initialFrameWidth: null,
        initialFrameHeight: 350
      }
    };
  },
  methods: {
    getUEContent() {
      let content = this.$refs.ue.getUEContent();
      this.$notify({
        title: "获取成功，可在控制台查看！",
        message: content,
        type: "success"
      });
      console.log(content);
    }
  }
};
</script>
