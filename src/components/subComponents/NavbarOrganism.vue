<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light">
      <router-link :to="{path: '/'}">
        <b-navbar-brand>
          <div class="d-flex justify-content-between align-items-center">
            <b-img src="/assets/icons/Favicons/favicon-48x48.png" fluid alt="Responsive image"></b-img>
          </div>
        </b-navbar-brand>
      </router-link>
      <b-navbar-nav>
        <b-nav-text v-show="authentication">
          Hallo {{ user.firstname }}
        </b-nav-text>
      </b-navbar-nav>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <router-link :to="{path: '/about'}">
            <b-nav-item>Über Uns</b-nav-item>
          </router-link>
          <router-link :to="{path: '/rooms'}">
            <b-nav-item>Zimmer</b-nav-item>
          </router-link>
          <router-link :to="{path: '/booking'}">
            <b-nav-item>Buchung vornehmen</b-nav-item>
          </router-link>
          <router-link :to="{path: '/login'}" v-show="!authentication">
            <b-nav-item>Einloggen</b-nav-item>
          </router-link>
          <router-link :to="{path: '/profile'}" v-show="authentication">
            <b-nav-item>Mein Profil</b-nav-item>
          </router-link>
          <router-link :to="{path: '/bookinghistory'}" v-show="authentication">
            <b-nav-item>Meine Buchungen</b-nav-item>
          </router-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

  </div>
</template>

<script>
import {useLoginStore} from "@/stores/LoginStore";
import {useUserStore} from "@/stores/UserStore";

export default {
  name: "NavbarOrganism",
  data() {
    return {
      loginStore: useLoginStore(),
      userStore: useUserStore(),
    }
  },
  computed: {
    token() {
      return this.loginStore.getToken
    },
    user() {
      return this.userStore.getUser
    },
    authentication() {
      if (this.token !== '') {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style scoped>

</style>