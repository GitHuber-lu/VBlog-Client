<template>
  <div class="footer-box">
    <div class="footer clearfix">
      <p>Copyright AYIO.TOP Rights Reserved. 苏ICP备16005416号.</p>
      <p>Powered by VBlog ! v1.0.</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {}
}
</script>
<style>
.footer {
  color: rgba(255, 255, 255, 0.6);
  text-shadow: 0 1px #fff;
  font-size: 12px;
}
.footer-box {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2196f3;
  color: #333;
  text-align: center;
  height: 80px;
  padding: 0 10px;
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

