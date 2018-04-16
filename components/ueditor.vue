<template>
  <div>
    <script id="editor" type="text/plain"></script>
  </div>
</template>
<script>
export default {
  name: "UE",
  data() {
    return {
      editor: null
    };
  },
  props: {
    defaultMsg: {
      type: String
    },
    config: {
      type: Object
    }
  },
  mounted() {
    this.editor = UE.getEditor("editor", this.config);
    this.editor.addListener("ready", () => {
      this.editor.setContent(this.defaultMsg);
    });
  },
  methods: {
    getContent() {
      return this.editor.getContent();
    },
    getContentTxt(){
      return this.editor.getContentTxt();
    }
  },
  destroyed() {
    this.editor.destroy();
  }
};
</script>