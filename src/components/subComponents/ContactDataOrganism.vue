<template>
  <b-card bg-variant="light" header="Kontakt" class="text-center m-4">
    <b-card-text>
      <p>{{ name }}</p>
      <p>{{ address }}</p>
      <p>{{ phone }}</p>
    </b-card-text>
  </b-card>
</template>

<script>
export default {
  name: "ContactDataOrganism",
  data() {
    return {
      name: 'Familie Boutiquehotel',
      address: 'Am Berg 1, Pampas, Österreich',
      phone: 'Telefon: 0800 800800',
    }
  }
}
</script>

<style scoped>

</style>

