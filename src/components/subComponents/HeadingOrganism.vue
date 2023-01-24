<template>
  <b-container fluid class="p-4 bg-light mt-2">
    <h2>{{ title }}</h2>
    <b-row>
      <b-img fluid :src=image :alt=imageAlt></b-img>
    </b-row>
    <b-row class="mt-4" v-if="text">
      <h5>{{ text }}</h5>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "HeadingOrganism",
  props: ['title', 'text', 'image', 'imageAlt'],
  data() {
    return {}
  }
}
</script>

<style scoped>

</style>