<template>
  <heading-organism v-bind:title="title"></heading-organism>
  <div v-if="comingFromRegistration">
    <h3 class="text-success mt-4">Willkommen {{ user.firstname }} {{ user.lastname }}!</h3>
    <p class="text-success">Die Registrierung war erfolgreich.</p>
  </div>
  <b-container class="mt-4" fluid style="height: 100vh;">
    <b-list-group>
      <b-list-group-item>
        Vorname: {{ user.firstname }}
      </b-list-group-item>
      <b-list-group-item>
        Nachname: {{ user.lastname }}
      </b-list-group-item>
      <b-list-group-item>
        E-Mail-Adresse: {{ user.email }}
      </b-list-group-item>
    </b-list-group>
  </b-container>
</template>

<script>
import HeadingOrganism from "@/components/subComponents/HeadingOrganism";
import {useLoginStore} from "@/stores/LoginStore";
import {useUserStore} from "@/stores/UserStore";

export default {
  name: "ProfilePage",
  components: {HeadingOrganism},
  props: {
    registration: String
  },
  data() {
    return {
      title: 'Mein Profil',
      comingFromRegistration: false,
      loginStore: useLoginStore(),
      userStore: useUserStore(),
    }
  },
  created() {
    this.comingFromRegistration = false
    this.userStore.readState(this.token)
    if (this.registration) {
      this.comingFromRegistration = true
    }
  },
  computed: {
    token() {
      return this.loginStore.getToken
    },
    user() {
      return this.userStore.getUser
    }
  }
}
</script>

<style scoped>

</style>