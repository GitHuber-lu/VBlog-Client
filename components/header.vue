<template>
  <mu-paper>
    <mu-bottom-nav :value="bottomNav" shift @change="handleChange">
      <mu-bottom-nav-item value="home" title="Home" icon="home" to="/"/>
      <mu-bottom-nav-item value="login" title="Login" icon="flight_takeoff" to="/login"/>
      <mu-bottom-nav-item value="register" title="Register" icon="favorite" to="/register"/>
      <mu-bottom-nav-item value="pictures" title="Pictures" icon="photo" to="/manage"/>
    </mu-bottom-nav>
  </mu-paper>
</template>

<script>
export default {
  data() {
    return {
      bottomNav: 'home',
      bottomNavColor: 'home'
    }
  },
  methods: {
    handleChange(val) {
      this.bottomNav = val
    },
    toPage(address) {
      this.$router.push(address)
    }
  }
}
</script>
