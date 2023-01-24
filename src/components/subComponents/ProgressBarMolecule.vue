<template>
  <div>
    <b-progress :max="max" show-progress animated variant="success">
      <b-progress-bar :value="this.progress" :label="this.progress"></b-progress-bar>
    </b-progress>
  </div>
</template>

<script>
export default {
  name: "ProgressBarMolecule",
  props: ['progress'],
  data() {
    return {
      max: 4
    }
  },
}
</script>

<style scoped>

</style>