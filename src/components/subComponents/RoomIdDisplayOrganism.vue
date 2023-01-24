<template>
  <room-display-molecule
      v-bind:room=room
      v-bind:image=getImage()
  >
  </room-display-molecule>
</template>

<script>
import {useRoomStore} from "@/stores/RoomStore";
import {useRoomsAvailability} from "@/stores/useRoomAvailabiltyStore";
import RoomDisplayMolecule from "@/components/subComponents/RoomDisplayMolecule";

export default {
  name: "RoomIdDisplayOrganism",
  props: ['roomId'],
  data() {
    return {
      roomStore: useRoomStore(),
      useRoomsAvailabilityStore: useRoomsAvailability(),
      roomIdFromStore: null,
    }
  },
  created() {
    this.roomStore.readState()
    this.useRoomsAvailabilityStore.readState()
  },
  components: {
    RoomDisplayMolecule,
  },
  methods: {
    getRoomIdFromStore() {
      this.roomIdFromStore = this.useRoomsAvailabilityStore.getId
    },
    getImage() {
      if (this.roomId != null) {
        return "/assets/images/rooms/" + (this.roomId + 1) + ".jpg"
      } else {
        return "/assets/images/rooms/" + (this.roomIdFromStore) + ".jpg"
      }
    }
  },
  computed: {
    room() {
      let rooms = this.roomStore.getRooms
      if (this.roomId != null) {
        let selectedRoom = rooms[this.roomId]
        return selectedRoom
      } else {
        this.getRoomIdFromStore()
        let selectedRoom = rooms[this.roomIdFromStore - 1]
        return selectedRoom
      }
    },
  }
}


</script>

<style scoped>

</style>