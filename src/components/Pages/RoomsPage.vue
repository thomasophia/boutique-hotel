<template>
  <heading-organism v-bind:title="title"></heading-organism>
  <room-list-organism></room-list-organism>
</template>

<script>
import HeadingOrganism from "@/components/subComponents/HeadingOrganism";
import RoomListOrganism from "@/components/subComponents/RoomListOrganism";

export default {
  name: "RoomPage",
  components: {
    RoomListOrganism,
    HeadingOrganism,
  },
  data() {
    return {
      title: 'Zimmer',
    }
  }
}
</script>
<style scoped>

</style>