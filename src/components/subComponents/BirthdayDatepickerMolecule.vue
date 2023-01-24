<template>
  <datepicker v-model="birthdate" :enableTimePicker="false" placeholder="Datum wählen" format="dd.MM.yyyy"
              autoApply :closeOnAutoApply="false" :max-date="getDate14YearsAgo"></datepicker>
</template>

<script>
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

export default {
  name: "BirthdayDatepickerMolecule",
  components: {Datepicker},
  data() {
    return {
      birthdate: null,
    };
  },
  computed: {
    getDate14YearsAgo() {
      let fourteenYearsAgo = new Date()
      fourteenYearsAgo.setTime(fourteenYearsAgo.valueOf() - 16 * 365 * 24 * 60 * 60 * 1000)
      return fourteenYearsAgo.toISOString().split("T")[0]
    }
  }
}
</script>

<style scoped>

</style>