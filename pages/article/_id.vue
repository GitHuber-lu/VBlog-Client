<template>
  <div class="article">
    <div class="title"></div>
    <div class="content"></div>
  </div>
</template>

<script>
// import vblogMenu from "~/components/menu.vue";

export default {
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {
    const aid = this.$route.params.id;
    if (aid) {
      this.$fetch("/getArticleDetail", {
        id: aid
      }).then(res => {
        if (res.code == "success") {
        }
      });
      return;
    }
    this.$notify.error({
      title: "提示",
      message: "未获取到文章ID",
      duration: 2000
    });
  }
};
</script>

