<template>
  <div class="hzy_main">
    123213213123
  </div>
</template>
<script>
  export default {
    data () {
      return {
      }
    },
    components: {
    },
    destroyed: function () {
    },
    created: function () {
      var _this = this
      if (!localStorage.getItem('imUserID')) {
        location.pathname = _this.$root.webim_config.publicPath + 'module/login.html'
      }
    },
    methods: {
    }
  }
</script>
<style>
</style>
