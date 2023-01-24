<template>
  <b-list-group class="mb-3">
    <b-list-group-item>{{ personalData.gender }}</b-list-group-item>
    <b-list-group-item>{{ personalData.firstname }} {{ personalData.lastname }}</b-list-group-item>
    <b-list-group-item>Geburtsdatum: {{ personalData.birthdate }}</b-list-group-item>
    <b-list-group-item>E-Mail: {{ personalData.email }}</b-list-group-item>
    <b-list-group-item v-if="personalData.breakfast">Frühstück inklusive</b-list-group-item>
  </b-list-group>
</template>

<script>
import {useBookingStore} from "@/stores/BookingStore";

export default {
  name: "PersonalDataTableOrganism",
  data() {
    return {
      bookingStore: useBookingStore(),
      personalData: {
        gender: null,
        firstname: null,
        lastname: null,
        birthdate: null,
        email: null,
        breakfast: false,
      }
    }
  },
  created() {
    this.setPersonalDataFromStore()
  },
  methods: {
    setPersonalDataFromStore() {
      this.personalData.gender = this.bookingStore.getBookingRequest.gender
      this.personalData.firstname = this.bookingStore.getBookingRequest.firstname
      this.personalData.lastname = this.bookingStore.getBookingRequest.lastname
      this.personalData.birthdate = this.bookingStore.getBookingRequest.birthdate
      this.personalData.email = this.bookingStore.getBookingRequest.email
      this.personalData.breakfast = this.bookingStore.getBookingRequest.breakfast
    }
  }

}
</script>

<style scoped>

</style>