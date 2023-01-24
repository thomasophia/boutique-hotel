<template>
  <b-container>
    <GMapMap
        :center='center'
        :zoom='15'
        style='width:100%;  height: 300px;'
        map-type-id="roadmap"
    >
      <GMapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :draggable="true"
          @click="center=m.position"
      ></GMapMarker>
    </GMapMap>
  </b-container>
</template>

<script>
export default {
  name: "GoogleMapsOrganism",
  data() {
    return {
      center: {lat: 47.43344639845772, lng: 9.814532758690119},
      currentPlace: null,
      markers: [
        {
          position: {
            lat: 47.43344639845772, lng: 9.814532758690119
          },
        }
        ,
      ]
    }
  },
}
</script>

<style scoped>

</style>