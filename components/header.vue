<template>
  <mu-paper>
    <mu-bottom-nav :value="bottomNav" shift @change="handleChange">
      <mu-bottom-nav-item value="home" title="Home" icon="home"></mu-bottom-nav-item>
      <mu-bottom-nav-item value="login" title="Login" icon="flight_takeoff"></mu-bottom-nav-item>
      <mu-bottom-nav-item value="register" title="Register" icon="favorite"></mu-bottom-nav-item>
      <mu-bottom-nav-item value="manage" title="Manage" icon="photo"></mu-bottom-nav-item>
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
