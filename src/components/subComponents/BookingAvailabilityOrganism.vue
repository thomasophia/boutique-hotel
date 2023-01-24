<template>
  <b-container>
    <div>{{ request }}</div>
    <div v-if="isAvailable" class="b-toast-success">Das gewählte Zimmer ist für diesen Zeitraum verfügbar.
    </div>
    <div v-else-if="isAvailable === false" class="b-toast-danger">Dieses Zimmer ist für den oben gewählten Zeitpunkt leider
      nicht verfügbar.
    </div>
    <div class="userFeedback" v-else>Bitte wählen Sie Zimmertyp und Buchungszeitraum.
    </div>
  </b-container>
</template>

<script>
import {useRoomsAvailability} from "@/stores/useRoomAvailabiltyStore";

export default {
  name: "BookingAvailabilityOrganism",
  props: ['date', 'roomId'],

  data() {
    return {
      roomStoreObject: useRoomsAvailability(),
    }
  },
  computed: {
    request() {
      this.roomStoreObject.setId(this.roomId)
      this.roomStoreObject.setDateObject(this.date)
      this.roomStoreObject.setUrl()
      this.roomStoreObject.readState()
      return null
    },

    isAvailable() {
      let availability = this.roomStoreObject.getAvailability;
      const state = availability["available"];
      return state
    }
  },

}
</script>

<style scoped>
.userFeedback {
  height: 450px;
}

</style>