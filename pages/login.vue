<template>
  <div class="main">
    <div class="main-header">
      <vblog-header></vblog-header>
    </div>
    <div class="main-body">
      <div class="container">
        <mu-paper class="paper" :zDepth="1">
          <mu-form ref="form" :model="validateForm">
            <mu-form-item prop="username" :rules="usernameRules">
              <mu-text-field label="" prop="username" v-model="validateForm.username" type="text" full-width></mu-text-field><br/>
            </mu-form-item>
            <mu-form-item prop="password" :rules="passwordRules">
              <mu-text-field label="" prop="password" v-model="validateForm.password" type="password" full-width></mu-text-field><br/>
            </mu-form-item>
            <mu-form-item>
              <mu-button color="primary" full-width @click="submitForm">登录</mu-button>
            </mu-form-item>
          </mu-form>
        </mu-paper>
      </div>
    </div>
    <div class="main-footer">
      <vblog-footer></vblog-footer>
    </div>
  </div>
</template>

<script>
import vblogHeader from "~/components/header.vue";
import vblogFooter from "~/components/footer.vue";
import { login } from "~/api/user";

export default {
  components: {
    vblogHeader,
    vblogFooter
  },
  data() {
    return {
      usernameRules: [{ validate: val => !!val, message: "必须填写用户名" }],
      passwordRules: [{ validate: val => !!val, message: "必须填写密码" }],
      validateForm: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    submitForm() {
      this.$refs.form.validate().then(valid => {
        if (valid) {
          this.$store.dispatch('Login', this.validateForm).then(res => {
            this.$router.push("/manage");
          });
        }
      });
    }
  }
};
</script>
<style>
</style>


