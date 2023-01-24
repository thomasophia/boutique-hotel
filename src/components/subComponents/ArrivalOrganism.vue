<template>
  <b-card bg-variant="light" header="Anfahrt" class="text-center m-4">
    <b-card-text>
      <h6>{{ title }}</h6>
      <p>{{ infoCar }}</p>
      <p>{{ infoHiking }}</p>
      <p>{{ infoPublic }}</p> <a href="https://www.oebb.at/">www.oebb.at</a>
    </b-card-text>
  </b-card>
</template>

<script>
export default {
  name: "ArrivalOrganism",
  data() {
    return {
      title: 'So kommen Sie am Besten zu unserem Hotel:',
      infoCar: 'Mit dem Auto: Über die B1 und dann am Graben rechts. Vergessen Sie die Schneeketten nicht.',
      infoHiking: 'Sie erreichen uns auch zu Fuß: Wanderweg Grün, W4. Unbedingt mit Schneeschuhen!',
      infoPublic: 'Zugverbindungen finden Sie unter:'
    }
  }
}
</script>

<style scoped>

</style>