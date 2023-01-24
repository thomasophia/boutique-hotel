<template>
  <heading-organism v-bind:title="title" v-bind:text="text" v-bind:image="image"
                    v-bind:image-alt="imageAlt"></heading-organism>
  <contact-data-organism></contact-data-organism>
  <arrival-organism></arrival-organism>
</template>

<script>
import HeadingOrganism from "@/components/subComponents/HeadingOrganism";
import ContactDataOrganism from "@/components/subComponents/ContactDataOrganism";
import ArrivalOrganism from "@/components/subComponents/ArrivalOrganism";

export default {
  name: "AboutPage",
  components: {ArrivalOrganism, ContactDataOrganism, HeadingOrganism},
  data() {
    return {
      title: 'Über Uns',
      image: '/assets/images/roberto-nickson-smJ6XsYy8gA-unsplash.jpg',
      imageAlt: 'familyimage',
      text: 'Familienbetrieb in dritter Generation.'
    }
  }
}
</script>

<style scoped>

</style>
