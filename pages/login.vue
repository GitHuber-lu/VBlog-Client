<template>
  <el-container>
    <el-header>
      <vblog-header></vblog-header>
    </el-header>
    <el-main>
      <div class="container">
        <el-form :model="ruleForm" ref="ruleForm" :rules="rules">
          <el-form-item label="用户名" prop="username">
            <el-input type="text" v-model="ruleForm.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="ruleForm.password"></el-input>
          </el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
        </el-form>
      </div>
    </el-main>
    <el-footer>
      <vblog-footer></vblog-footer>
    </el-footer>
  </el-container>
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

