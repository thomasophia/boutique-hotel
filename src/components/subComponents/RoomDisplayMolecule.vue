<template>
  <div>
    <b-card
        :img-src=image
        img-alt="Image"
        img-top
        class="mx-auto"
        img-height="200"
        style="max-width: 20rem"
    >
      <b-card-text>
        <h3>{{ room.roomsName }}</h3>
        <p>{{ room.beds }} - Bett Zimmer</p>
        <p>{{ room.pricePerNight }}€ / Nacht</p>
      </b-card-text>
      <b-list-group class="mb-3">
        <b-list-group-item>
          <b-container>
            <b-row>
              <b-col v-if="room.extras[4].aircondition === 1">
                <b-icon-wind></b-icon-wind>
                <p>AC</p>
              </b-col>
              <b-col v-if="room.extras[2].television === 1">
                <b-icon-tv></b-icon-tv>
                <p>TV</p>
              </b-col>
              <b-col v-if="room.extras[0].bathroom === 1">
                <b-icon-door-closed></b-icon-door-closed>
                <p>Bad</p>
              </b-col>
              <b-col v-if="room.extras[1].minibar === 1">
                <b-icon-cup-straw></b-icon-cup-straw>
                <p>Minibar</p>
              </b-col>
            </b-row>
          </b-container>
        </b-list-group-item>
      </b-list-group>
      <div v-if="routingButton">
        <router-link :to="{path: '/booking/'+id}">
          <b-button variant="primary">Verfügbarkeit prüfen</b-button>
        </router-link>
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "RoomDisplayMolecule",
  props: ['room', 'image', 'routingButton'],
  data() {
    return {
      id: this.room.id,
    }
  },
}
</script>

<style scoped>

</style>