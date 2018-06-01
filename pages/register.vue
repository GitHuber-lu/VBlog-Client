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
          <mu-button color="primary" full-width>注册</mu-button>  
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
            min: 6,
            message: '密码长度至少6个字符',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  components: {
    vblogHeader,
    vblogFooter
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$put('/register', {
            username: this.ruleForm.username,
            password: md5(this.ruleForm.password)
          }).then(res => {
            if (res.code == 'success') {
              this.$notify.info({
                title: '提示',
                message: '注册成功',
                duration: 2000
              })
            }
            if (res.code == 'error_user_exist') {
              this.$notify.error({
                title: '提示',
                message: '用户名已存在',
                duration: 2000
              })
            }
          })
        }
      })
    }
  }
}
</script>

