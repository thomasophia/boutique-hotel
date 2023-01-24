<template>
  <heading-organism title="Meine Buchungen"></heading-organism>
  <h5 class="mt-5">Geplante Reisen</h5>
  <booking-table-molecule v-bind:bookings=futureBookings></booking-table-molecule>
  <h5 class="mt-5">Vergangene Reisen</h5>
  <booking-table-molecule v-bind:bookings=pastBookings></booking-table-molecule>
</template>

<script>
import HeadingOrganism from "@/components/subComponents/HeadingOrganism";
import BookingTableMolecule from "@/components/subComponents/BookingTableMolecule";
import {useBookingStore} from "@/stores/BookingStore";
import {useLoginStore} from "@/stores/LoginStore";
import {useUserStore} from "@/stores/UserStore";

export default {
  name: "BookingHistoryPage",
  components: {BookingTableMolecule, HeadingOrganism},
  data() {
    return {
      bookingStore: useBookingStore(),
      userStore: useUserStore(),
      loginStore: useLoginStore(),
      dateToday: this.currentDate()
    }
  },
  created() {
    this.bookingStore.readBookings(this.token)
  },
  methods: {
    currentDate() {
      let today = new Date();
      return today.toISOString().split("T")[0];
    }
  },
  computed: {
    futureBookings() {
      let futureBookingsList = [];
      for (let booking in this.bookingsApi) {
        if (this.bookingsApi[booking].from > this.dateToday) {
          futureBookingsList.push(this.bookingsApi[booking])
        }
      }
      return futureBookingsList;
    },
    pastBookings() {
      let pastBookingsList = [];
      for (let booking in this.bookingsApi) {
        if (this.bookingsApi[booking].from <= this.dateToday) {
          pastBookingsList.push(this.bookingsApi[booking])
        }
      }
      return pastBookingsList;
    },
    bookingsApi() {
      return this.bookingStore.getBookings
    },
    token() {
      return this.loginStore.getToken
    },
  }
}

</script>

<style scoped>

</style>

