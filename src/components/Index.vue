<template>
  <div class="hello">
    头条首页
    {{msg}}
    {{bannerList}}
    <router-link :to="{ path: 'detail', query: { id: 111 }}">详情页</router-link>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'index',
    computed: {
      ...mapGetters({
        bannerList: 'bannerList'
      })
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
