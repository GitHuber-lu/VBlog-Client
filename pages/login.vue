<template>
  <div class="main">
    <div class="main-header">
      <vblog-header></vblog-header>
    </div>
    <div class="main-body">
      <div class="container">
        <mu-paper class="paper" :zDepth="1">
          <mu-text-field label="用户名" hintText="请输入用户名" type="text" fullWidth required="true" />
          <mu-text-field label="密码" hintText="请输入密码" type="password" fullWidth required="true" />
          <mu-raised-button label="登录" fullWidth backgroundColor="#474a4f" />
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
import Cookie from 'js-cookie'
import md5 from 'md5'

export default {
  components: {
    vblogHeader,
    vblogFooter
  },
  data() {
    return {
      ruleForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$fetch('/login', {
            username: this.ruleForm.username,
            password: md5(this.ruleForm.password)
          }).then(res => {
            if (res.code == 'success') {
              const token = res.data.token
              Cookie.set('TOKEN', token)
              this.$router.push('/manage')
              return
            }
            this.$notify.error({
              title: '提示',
              message: '用户名或密码错误',
              duration: 2000
            })
          })
        }
      })
    }
  }
}
</script>
<style>
</style>


