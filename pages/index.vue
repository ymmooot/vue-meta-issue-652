<template>
  <div>
    <h1>First Page</h1>
    <nuxt-link to="second">Second Page</nuxt-link>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'test title 1'
    }
  },    
  computed: {
    sample() {
      return 'first page'
    }
  }
}
</script>