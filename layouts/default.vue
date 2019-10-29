<template>
  <div id="app">
    <v-header />
    <div class="main">
      <nuxt />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  components: {
    'v-header': Header
  }
}
</script>

<style>
@import '../assets/styles/variables.css';
@import '../assets/styles/fonts.css';
@import '../assets/styles/base.css';
@import '../assets/styles/typography.css';
@import '../assets/styles/utils.css';
</style>
