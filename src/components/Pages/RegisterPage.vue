<template>
  <heading-organism v-bind:title="title"></heading-organism>
<registration-form-organism></registration-form-organism>
</template>

<script>
import RegistrationFormOrganism from "@/components/subComponents/RegistrationFormOrganism";
import HeadingOrganism from "@/components/subComponents/HeadingOrganism";
export default {
  name: "RegisterPage",
  components: {HeadingOrganism, RegistrationFormOrganism},
  data() {
    return {
      title: "Registrieren"
    }
  }
}
</script>

<style scoped>

</style>