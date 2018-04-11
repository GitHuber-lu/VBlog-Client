<template>
  <el-container>
    <el-header>
      <vblog-menu></vblog-menu>
    </el-header>
    <el-main>
        <div class="register">
            <el-input class="mb-2" v-model="username" placeholder="username"></el-input>
            <el-input class="mb-2" v-model="password" placeholder="password" type="password"></el-input>
            <el-button type="primary" @click="register">注册</el-button>
        </div>
    </el-main>
    <el-footer>
      <vblog-footer></vblog-footer>
    </el-footer>
  </el-container>
</template>

<script>
import vblogMenu from "~/components/menu.vue";
import vblogFooter from "~/components/footer.vue";
import md5 from "md5";

export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  components: {
    vblogMenu,
    vblogFooter
  },
  methods: {
    register() {
      this.$fetch("/register", {
        username: this.username,
        password: md5(this.password)
      }).then(res => {
        if (res.code == 200) {
          
        }
        if (res.code == 601) {
          this.$notify.error({
            title: "提示",
            message: "用户名已存在",
            duration: 2000
          });
        }
      });
    }
  }
};
</script>

