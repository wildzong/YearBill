/* eslint-disable */
<template>
  <div>
    page1
    <button @click="nextP">down</button>
  </div>
</template>

<script>
export default {
  name: 'page1',
  data () {
    return {
    }
  },
  methods: {
    nextP () {
      this.$router.push('/page2')
    }
  }
}
</script>
