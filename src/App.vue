<template lang="pug">
  div#app
    div#nav
      router-link(to="/") Home
      router-link(to="/about") About
    router-view
</template>

<style lang="scss">
  #app {
    color: #2c3e50;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }

  #nav {
    padding: 30px;
    a {
      color: $color-text;
      font-weight: bold;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
