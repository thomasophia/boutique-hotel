<template>
  <div>
    <b-table hover :items="bookings" :fields="fields"></b-table>
  </div>
</template>

<script>
export default {
  name: "BookingTableMolecule",
  props: ['bookings'],
  data() {
    return {
      fields: [
        {key: 'id', label: 'Zimmer'},
        {key: 'from', label: 'Von'},
        {key: 'to', label: 'Bis'}
      ]
    }
  },

}
</script>

<style scoped>

</style>