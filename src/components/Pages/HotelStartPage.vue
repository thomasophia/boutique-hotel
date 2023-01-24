<template>
  <heading-organism class="mb-5" v-bind:title="title" v-bind:text="text" v-bind:image="image"
                    v-bind:image-alt="imageAlt"></heading-organism>
  <router-link :to="{path: '/booking'}">
    <b-button class="mb-5" size="lg" variant="dark">Jetzt buchen!</b-button>
  </router-link>
</template>

<script>
import HeadingOrganism from "@/components/subComponents/HeadingOrganism";

export default {
  name: "HotelPage",
  components: {
    HeadingOrganism
  },
  data() {
    return {
      title: 'Das Hotel',
      image: '/assets/images/hotel-belvedere-bozen.jpg',
      imageAlt: 'hotelimage',
      text: 'Unser Hotel liegt auf einer wunderschönen Anhöhe mitten in den Bergen. ' +
          'Wir bieten Ihnen einen erholsamen Aufenthalt in unseren komfortablen Zimmern mit Ausblick.' +
          ' Gerne verwöhnen wir Sie dabei mit unserem Bio-Frühstück.' +
          ' Gönnen Sie sich und Ihren Liebsten eine Auszeit bei uns!'
    }
  }
}
</script>

<style scoped>

</style>
