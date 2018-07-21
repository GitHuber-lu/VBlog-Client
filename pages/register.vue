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
              <mu-button color="primary" full-width @click="submitForm">注册</mu-button>
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
import { register } from "~/api/user"
import md5 from "md5";

export default {
  data() {
    return {
      usernameRules: [
        { validate: val => !!val, message: "必须填写用户名" },
        { validate: val => val.length >= 3, message: "用户名长度大于3" }
      ],
      passwordRules: [
        { validate: val => !!val, message: "必须填写密码" },
        {
          validate: val => val.length >= 6 && val.length <= 18,
          message: "密码长度大于6小于18"
        }
      ],
      validateForm: {
        username: "",
        password: ""
      }
    };
  },
  components: {
    vblogHeader,
    vblogFooter
  },
  methods: {
    submitForm() {
      this.$refs.form.validate().then(valid => {
        if (valid) {
          register(
            this.validateForm.username,
            md5(this.validateForm.password)
          ).then(res=>{
            alert('注册成功')
          })
        }
      });
    }
  }
};
</script>
<style scoped>
</style>


