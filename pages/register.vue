<template>
  <el-container>
    <el-header>
      <vblog-menu></vblog-menu>
    </el-header>
    <el-main>
      <el-form :model="ruleForm" ref="ruleForm" :rules="rules">
        <el-form-item label="用户名" prop="username">
          <el-input type="text" v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="ruleForm.password"></el-input>
        </el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
      </el-form>
    </el-main>
    <el-footer>
      <vblog-footer></vblog-footer>
    </el-footer>
  </el-container>
</template>

<script>
import vblogMenu from '~/components/menu.vue'
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
    vblogMenu,
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
            if (res.code == 200) {
              this.$notify.info({
                title: '提示',
                message: '注册成功',
                duration: 2000
              })
            }
            if (res.code == 601) {
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

