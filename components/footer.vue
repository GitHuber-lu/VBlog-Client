<template>
    <div class="footer">
      <p>Copyright W3COOL.CN Rights Reserved. 苏ICP备16005416号.</p>
      <p>Powered by VBlog ! v1.0.</p>
    </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>
<style>
.footer {
  color: rgba(0, 0, 0, 0.6);
  text-shadow: 0 1px #fff;
  font-size: 12px;
}
@media screen and (min-width: 768px) {
  .footer p:first-child {
    float: left;
  }
  .footer p:last-child {
    float: right;
  }
}
</style>

