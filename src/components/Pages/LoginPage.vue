<template>
  <heading-organism v-bind:title="title"></heading-organism>
  <div>
    <b-container fluid>
      <b-form>
        <b-form-group class="m-2 mt-5"
                      id="input-group-1"
                      label="Email-Adresse "
                      label-for="input-1"
                      description="Login mit E-Mail-Adresse.">
          <b-form-input class="m-2"
                        id="input-1"
                        v-model.trim="form.clientId"
                        type="email"
                        name="email"
                        placeholder="Email eingeben"
                        required
          ></b-form-input>
        </b-form-group>
        <b-form-group class="m-2"
                      id="input-group-2"
                      label="Passwort:"
                      label-for="input-2"
                      description="Passwort für Ihren Account eingeben.">
          <b-form-input class="m-2"
                        id="input-2"
                        v-model.trim="form.secret"
                        type="password"
                        placeholder="Passwort eingeben"
                        required
          ></b-form-input>
        </b-form-group>

        <div v-show="sentAuthentication">
          <div v-if="errorMessage" class="b-toast-danger">Für diese Zugangsdaten konnte leider kein Account gefunden
            werden.
          </div>
        </div>
        <div>
          <label>Noch nicht registriert? Hier lang:</label>
          <div>
            <router-link :to="{path: '/register'}">Registrieren</router-link>
          </div>
        </div>
        <b-button class="m-3" size="md" variant="secondary" href="/">Abbrechen</b-button>
        <b-button class="m-3" type="submit" variant="primary"
                  @click="login">
          Einloggen
        </b-button>
      </b-form>
    </b-container>
  </div>
</template>

<script>

import {useVuelidate} from '@vuelidate/core'
import {required, email} from '@vuelidate/validators'
import HeadingOrganism from "@/components/subComponents/HeadingOrganism";
import {useLoginStore} from "@/stores/LoginStore";

export default {
  name: "LoginPage",
  components: {HeadingOrganism},
  data() {
    return {
      loginStore: useLoginStore(),
      title: 'Login',
      form: {
        clientId: '',
        secret: '',
      },
      sentAuthentication: false,
      errorMessage: false,
    }
  },
  validations() {
    return {
      form: {
        clientId: {
          required,
          email
        },
        secret: {
          required
        },
      }
    }
  },
  setup() {
    return {v$: useVuelidate()}
  },
  methods: {
    login() {
      if (!this.v$.$invalid) {
        this.loginStore.login(this.form.clientId, this.form.secret)
        setTimeout(this.setAuthentication, 2000)
      }
    },
    setAuthentication() {
      this.sentAuthentication = true;
      if (this.token === '') {
        this.errorMessage = true
      } else {
        this.$router.push("/profile")
      }
    }
  },
  computed: {
    token() {
      return this.loginStore.getToken
    }
  }
}
</script>

<style scoped>

</style>