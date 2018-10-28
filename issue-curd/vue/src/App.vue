<template>
  <div id="app">
    <bug-index />
  </div>
</template>

<script>
import Bug from '~/view/bug/index.vue'

export default {
  name: 'app',
  components: {
    'bug-index': Bug
  }
}
</script>

<style lang="scss">
@import './styles/custome-bootstrap.scss';
@import '../node_modules/bootstrap/scss/bootstrap.scss';
</style>
