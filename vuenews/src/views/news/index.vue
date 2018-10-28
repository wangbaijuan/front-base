<template>
  <div class="container" id="app">
    <SourceSelection v-on:sourceChanged="sourceChanged"></SourceSelection>
    <Newslist v-bind:source="source"></Newslist>
  </div>
</template>
<script>
/* eslint-disable */ 
import Newslist from '@/components/news/Newslist'
import SourceSelection from '@/components/news/SourceSelection'
export default {
  name: 'news',
  components: {
    Newslist,
    SourceSelection
  },
  data () {
    return {
      source: ''
    }
  },
  methods: {
    sourceChanged: function (source) {
      this.source = source
    }
  }
}
</script>
<style>
  #app {
    padding-top: 20px
  }
</style>