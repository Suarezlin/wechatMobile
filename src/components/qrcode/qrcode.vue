<template>
  <div class="qrcode">
    <img :src="qrcodeBase" width="60%">
    <div class="text-wrapper">
      扫描屏幕上方二维码登录
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        qrcodeBase: ''
      };
    },
    created () {
      const that = this;
      this.axios.get('/api/qrcode').then((res) => {
        this.qrcodeBase = 'data:image/png;base64,' + res.data.qrcode.slice(2, -1);
        // eslint-disable-next-line
        function poll() {
          console.log('poll');
          setTimeout(function () {
            that.axios.get('/api/check_login').then((res) => {
              console.log(res);
              if (res.data.result === 1) {
                console.log('success');
              } else if (res.data.result === 2) {
                console.log('scan');
                poll();
              } else if (res.data.result === 3) {
                this.qrcodeBase = res.data.qrcode;
                poll();
              }
            });
          }, 2000);
        };
        poll();
      });
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
  img
    position: absolute
    width: 60%
    top: 180px
    left: 50%
    margin-left: -30%

  .text-wrapper
    position: absolute
    bottom: 30%
    width: 100%
    text-align: center
    font-size: 16px
</style>
