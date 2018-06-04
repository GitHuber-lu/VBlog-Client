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
              <mu-text-field label="用户名" prop="username" v-model="validateForm.username" type="text" label-float help-text="" icon="account_circle" full-width></mu-text-field><br/>
            </mu-form-item>
            <mu-form-item prop="password" :rules="passwordRules">
              <mu-text-field label="密码" prop="password" v-model="validateForm.password" type="password" label-float help-text="" icon="locked" full-width></mu-text-field><br/>
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
import vblogHeader from '~/components/header.vue'
import vblogFooter from '~/components/footer.vue'
import md5 from 'md5'

export default {
  data() {
    return {
      usernameRules: [
        { validate: val => !!val, message: '必须填写用户名' },
        { validate: val => val.length >= 3, message: '用户名长度大于3' }
      ],
      passwordRules: [
        { validate: val => !!val, message: '必须填写密码' },
        {
          validate: val => val.length >= 6 && val.length <= 18,
          message: '密码长度大于6小于18'
        }
      ],
      validateForm: {
        username: '',
        password: ''
      }
    }
  },
  components: {
    vblogHeader,
    vblogFooter
  },
  methods: {
    submitForm() {
      alert(this.$refs.form.validate())
      // this.$refs.form.validate(valid => {
      //   alert(valid)
      //   if (valid) {
      //     this.$put('/register', {
      //       username: this.validateForm.username,
      //       password: md5(this.validateForm.password)
      //     }).then(res => {
      //       if (res.code == 'success') {
      //         alert('ok')
      //         // this.$notify.info({
      //         //   title: '提示',
      //         //   message: '注册成功',
      //         //   duration: 2000
      //         // })
      //       }
      //       if (res.code == 'error_user_exist') {
      //         alert('nok')
      //         // this.$notify.error({
      //         //   title: '提示',
      //         //   message: '用户名已存在',
      //         //   duration: 2000
      //         // })
      //       }
      //     })
      //   }
      // })
    }
  }
}
</script>
<style scoped>

</style>


