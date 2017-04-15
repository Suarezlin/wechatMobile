<template>
  <div class="login">
    <router-link to="/qrcode">
      <div class="login-button">登录</div>
    </router-link>
  </div>
</template>
<script>
  export default {};
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .login
    width: 100%
    height: 100%
    background-image: url(./login.png)
    background-size: 100% 100%
    background-repeat: no-repeat
    position: relative
    .login-button
      width: 120px
      height: 40px
      background: rgb(70, 191, 30)
      border-radius: 5px
      text-align: center
      line-height: 40px
      font-size: 16px
      color: #ffffff
      position: absolute
      left: 50%
      bottom: 10%
      margin-left: -60px
</style>
