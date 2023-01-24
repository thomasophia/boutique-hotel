<template>
  <heading-organism v-bind:title="title"></heading-organism>
  <b-container fluid>
    <progress-bar-molecule v-bind:progress="progress"></progress-bar-molecule>
    <hr>
    <div v-if="roomBookingDisplay">
      <b-form-group class="m-2">
        <b-col class="mb-3">
          <b-form-select v-model="selected" :options="this.options" @input="roomSelection">
            <b-form-select-option v-for="room in rooms" :key="room.id" :value="room.id">{{ room.roomsName }}
            </b-form-select-option>
          </b-form-select>
        </b-col>
        <b-col class="mb-3">
          <datepicker-molecule v-model="this.date"></datepicker-molecule>
          <div class="mt-3" v-if="this.roomId != null && this.roomId >= 0">
            <room-id-display-organism :room-id="(this.roomId-1)"></room-id-display-organism>
          </div>
        </b-col>
        <hr>
      </b-form-group>
      <booking-availability-organism
          v-bind:date="this.date"
          v-bind:roomId="selected">
      </booking-availability-organism>
      <b-button @click="roomsSelectionConfirmaton" v-if="getRoomAvailability" class="btn-success m-3">Auswählen
      </b-button>
    </div>

    <div v-if="userDataDisplay">
      <hr>
      <b-col>
        <personal-data-form-organism ref="form"></personal-data-form-organism>
      </b-col>
      <b-row class="mt-3">
        <b-col class="pb-2">
          <b-button href="/">Abbrechen</b-button>
        </b-col>
        <b-col class="pb-2">
          <b-button variant="success" type="submit" @click="userDataConfirmation">Weiter</b-button>
          <p v-if="invalid" class="text-danger">{{ errorMessage }}</p>
        </b-col>
      </b-row>
    </div>

    <div v-if="bookingOverviewDisplay">
      <div class="mt-3 mb-3">
        <booking-overview-template></booking-overview-template>
        <b-row class="p-3">
          <b-col>
            <b-button @click="showRoomAndDatePicker" class="btn-dark">Zeitraum oder Zimmer ändern
              <b-icon-pencil></b-icon-pencil>
            </b-button>
          </b-col>
          <b-col>
            <b-button @click="showForm" class="btn-dark">Persönliche Daten bearbeiten
              <b-icon-pencil></b-icon-pencil>
            </b-button>
          </b-col>
        </b-row>
      </div>
      <b-button v-if="bookingOverviewDisplay" @click="sendBooking" class="m-3" size="md" variant="success">Buchung abschicken</b-button>
      <br />
      <b-button v-if="bookingOverviewDisplay" class="m-3" size="md" variant="secondary" href="/">Abbrechen</b-button>
    </div>
  </b-container>
</template>

<script>
import DatepickerMolecule from "@/components/subComponents/DatepickerMolecule";
import HeadingOrganism from "@/components/subComponents/HeadingOrganism";
import PersonalDataFormOrganism from "@/components/subComponents/PersonalDataFormOrganism";
import ProgressBarMolecule from "@/components/subComponents/ProgressBarMolecule";
import BookingAvailabilityOrganism from "@/components/subComponents/BookingAvailabilityOrganism";
import RoomIdDisplayOrganism from "@/components/subComponents/RoomIdDisplayOrganism";
import BookingOverviewTemplate from "@/components/subComponents/BookingOverviewTemplate";
import {useRoomStore} from "@/stores/RoomStore";
import {useRoomsAvailability} from "@/stores/useRoomAvailabiltyStore";
import {useBookingStore} from "@/stores/BookingStore";
import {useLoginStore} from "@/stores/LoginStore";
import {useVuelidate} from "@vuelidate/core";
import {useUserStore} from "@/stores/UserStore";

export default {
  name: "BookingPage",
  components: {
    RoomIdDisplayOrganism,
    BookingAvailabilityOrganism,
    DatepickerMolecule,
    HeadingOrganism,
    PersonalDataFormOrganism,
    ProgressBarMolecule,
    BookingOverviewTemplate
  },
  props: {
    id: String
  },

  data() {
    return {
      roomStore: useRoomStore(),
      bookingStore: useBookingStore(),
      loginStore: useLoginStore(),
      userStore: useUserStore(),
      title: "Buchungen",
      options: [
        {value: '', text: 'Zimmertyp wählen'},
      ],
      date: [new Date(), new Date().setTime(new Date().valueOf() + 48 * 60 * 60 * 1000)],
      selected: '',
      progress: 1,
      roomBookingDisplay: true,
      userDataDisplay: false,
      bookingOverviewDisplay: false,
      roomIsSelected: false,
      roomAvailabilityStore: useRoomsAvailability(),
      roomId: null,
      errorMessage: null,
    }
  }, created() {
    this.roomStore.readState()
    if (this.id) {
      this.selected = this.id
      this.roomSelection(this.selected)
    }
  },
  setup() {
    return {v$: useVuelidate()}
  },
  methods:
      {
        roomsSelectionConfirmaton() {
          this.progress = 2
          this.roomBookingDisplay = false
          this.userDataDisplay = true
          setTimeout(this.fillOutForm, 100)
        },
        userDataConfirmation() {
          if (!this.$refs.form.v$.$invalid) {
            this.progress = 3
            this.userDataDisplay = false
            this.bookingOverviewDisplay = true
            this.$refs.form.saveData()
          } else {
            this.errorMessage = "Bitte füllen Sie alle Felder aus, bzw überprüfen Sie die Schreibweise Ihrer Email."
          }
        },
        roomSelection(value) {
          this.roomId = value
          this.roomIsSelected = true
        },
        showRoomAndDatePicker() {
          this.progress = 1
          this.roomBookingDisplay = true
          this.bookingOverviewDisplay = false
        },
        showForm() {
          this.progress = 2
          this.userDataDisplay = true
          this.bookingOverviewDisplay = false
          setTimeout(this.fillOutForm, 100)
        },
        sendBooking() {
          this.bookingStore.requestBookings(this.token);
          setTimeout(this.redirectToConfirmation, 2000)
        },
        fillOutForm() {
          if (this.token) {
            this.$refs.form.loadDataLoggedInUser()
          } else {
            this.$refs.form.setData();
          }
        },
        redirectToConfirmation() {
          this.$router.push("/confirmation")
        }
      },
  computed: {

    rooms() {
      return this.roomStore.getRooms
    },
    getRoomAvailability() {
      return this.roomAvailabilityStore.available["available"]
    },
    token() {
      return this.loginStore.getToken
    },
    invalid() {
      return this.v$.$invalid;
    }
  }
}

</script>

<style scoped>

</style>

