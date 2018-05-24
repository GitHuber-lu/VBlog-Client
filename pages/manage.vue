<template>
    <el-container>
        <el-main>
            <el-row>
                <el-col :span="4">
                    <div class="el-menu-box">
                        <el-menu default-active="1-1" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
                            <el-menu-item index="1-1" @click="$router.push('/manage/add')">新增文章</el-menu-item>
                            <el-menu-item index="1-2" @click="$router.push('/manage/handle')">文章管理</el-menu-item>
                        </el-menu>
                    </div>
                </el-col>
                <el-col :span="20">
                    <el-breadcrumb class="el-breadcrumb" separator="/">
                        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                        <el-breadcrumb-item>
                            <a href="/">活动管理</a>
                        </el-breadcrumb-item>
                        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
                    </el-breadcrumb>
                    <nuxt-child/>
                </el-col>
            </el-row>
        </el-main>
    </el-container>
</template>

<script>
// import vblogMenu from '~/components/menu.vue'
import vblogFooter from '~/components/footer.vue'

export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  components: {
    // vblogMenu,
    vblogFooter
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style scoped>
.el-menu-box {
  height: 100vh;
  background-color: rgb(84, 92, 100);
}
.el-main {
  padding: 0;
  height: 100vh;
}
.el-breadcrumb {
  height: 60px;
  line-height: 60px;
  background-color: #eee;
  padding-left: 20px;
  border-bottom: 1px solid #ccc;
}
.el-container {
  padding-bottom: 0;
}
</style>




