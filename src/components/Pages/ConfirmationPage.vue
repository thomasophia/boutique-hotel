<template>
  <heading-organism v-bind:title="title"></heading-organism>
  <div v-if="bookingId==null">
    <h5 class="text-danger">Ups! Leider ist beim Buchungsprozess etwas schief gegangen. Bitte führen Sie die Buchung
      nochmal aus.</h5>
  </div>
  <div v-else>
    <h5 class="m-3 text-success">Ihre Buchung war erfolgreich!</h5>
    <h5 class="mb-3 mt-3 text-success">Buchungs-Id: {{ this.bookingId }}</h5>
    <div class="mt-3 mb-5">
      <booking-overview-template></booking-overview-template>
    </div>
    <h4>Unser Standort</h4>
    <google-maps-organism></google-maps-organism>
    <arrival-organism></arrival-organism>
    <contact-data-organism></contact-data-organism>
  </div>
</template>

<script>
import HeadingOrganism from "@/components/subComponents/HeadingOrganism";
import ContactDataOrganism from "@/components/subComponents/ContactDataOrganism";
import GoogleMapsOrganism from "@/components/subComponents/GoogleMapsOrganism";
import ArrivalOrganism from "@/components/subComponents/ArrivalOrganism";
import {useBookingStore} from "@/stores/BookingStore";
import BookingOverviewTemplate from "@/components/subComponents/BookingOverviewTemplate";

export default {
  name: "ConfirmationPage",
  components: {BookingOverviewTemplate, ArrivalOrganism, GoogleMapsOrganism, ContactDataOrganism, HeadingOrganism},
  data() {
    return {
      title: 'Buchungsbestätigung',
      bookingStore: useBookingStore()
    }
  },
  computed: {
    bookingId() {
      return this.bookingStore.getBookingId
    }
  }
}
</script>

<style scoped>

</style>