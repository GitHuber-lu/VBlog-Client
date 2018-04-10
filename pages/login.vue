<template>
  <el-container>
    <el-header>
      <vblog-menu></vblog-menu>
    </el-header>
    <el-main>
        <div class="login">
            <el-input class="mb-2" v-model="username" placeholder="username"></el-input>
            <el-input class="mb-2" v-model="password" placeholder="password" type="password"></el-input>
            <el-button type="primary" @click="login">登录</el-button>
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

export default {
  data(){
    return {
      username:'',
      password:''
    }
  },
  components: {
    vblogMenu,
    vblogFooter
  },
  methods:{
    login(){
      this.$fetch('/login', {username:this.username,password:this.password}).then(function(data){
        console.log(data)
      })
    }
  }
};
</script>

