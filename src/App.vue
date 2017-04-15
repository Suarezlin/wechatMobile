<template>
  <div id="app">
    <div class="page-wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import loginpage from './components/loginPage/loginPage';
  export default {
    name: 'app',
    components: {
      loginpage
    }
  };
</script>

<style lang="stylus">
  html, body
    width: 100%
    height: 100%

  #app
    font-family: 'Avenir', Helvetica, Arial, sans-serif
    width: 100%
    height: 100%

  .page-wrapper
    width: 100%
    height: 100%
</style>
