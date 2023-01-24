<template>
  <b-container class="mt-4" fluid style="height: 100vh;">
  <heading-organism v-bind:title="title"></heading-organism>
  <contact-data-organism></contact-data-organism>
  </b-container>
</template>

<script>
import HeadingOrganism from "@/components/subComponents/HeadingOrganism";
import ContactDataOrganism from "@/components/subComponents/ContactDataOrganism";

export default {
  name: "ImpressumPage",
  components: {ContactDataOrganism, HeadingOrganism},
  data() {
    return {
      title: 'Impressum',
    }
  }
}
</script>

<style scoped>

</style>
