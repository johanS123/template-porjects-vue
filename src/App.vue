<template>
  <div id="app">
    <h1>Usuarios</h1>
    <pre>{{users}}</pre>
    <button type="button" @click="consult">Consultar</button>
  </div>
</template>
<script>
import { mget } from '@/services/endpoint.js'
export default {
  data () {
    return {
      users: []
    }
  },
  mounted () {
    
  },
  methods: {
    consult () {
      mget('https://randomuser.me/api/').then((data) => this.users = data.results)
    }
  }
}
</script>

<style lang="scss">
  @import url('styles.scss');
</style>

