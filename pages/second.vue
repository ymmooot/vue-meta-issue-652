<template>
  <div>
    <h1>Second Page</h1>
    <nuxt-link to="/">First page</nuxt-link>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'test title 2'
    }
  },    
  computed: {
    sample() {
      return 'second page'
    }
  }
}
</script>