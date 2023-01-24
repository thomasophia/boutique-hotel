<template>
  <div>
    <b-container>
      <b-form bg-variant="light">
        <h6 class="mt-3">
          Erstellen Sie sich ein Profil, um Ihre Buchungen besser verwalten zu können.
        </h6>
        <p>Ihre Daten werden in Ihrem Profil gespeichert, um zukünftig schneller Buchungen abwickeln zu können.
          <br>In Ihrem Profil können Sie vergangene Buchungen einsehen.</p>
        <b-form-group
            label="Vorname:"
            label-for="firstname"
            label-cols-sm="3"
            label-align-sm="right"
        >
          <b-form-input id="firstname" type="text" v-model="registrationData.firstname" required></b-form-input>
        </b-form-group>
        <b-form-group
            label="Nachname:"
            label-for="lastname"
            label-cols-sm="3"
            label-align-sm="right"
        >
          <b-form-input id="lastname" type="text" v-model="registrationData.lastname" required></b-form-input>
        </b-form-group>
        <b-form-group
            label="Email:"
            label-for="email"
            label-cols-sm="3"
            label-align-sm="right"
        >
          <b-form-input id="email" type="email" v-model.trim="registrationData.email" required></b-form-input>
        </b-form-group>
        <b-form-group
            label="Email wiederholen:"
            label-for="email-repeat"
            label-cols-sm="3"
            label-align-sm="right"
        >
          <b-form-input id="email repeat" type="email" v-model.trim="registrationData.emailrepeat"
                        required></b-form-input>
          <p v-if="registrationData.email !== registrationData.emailrepeat" class="text-danger">Email-Adressen stimmen
            nicht
            überein</p>
        </b-form-group>
        <b-form-group
            label="Benutzername"
            label-for="username"
            label-cols-sm="3"
            label-align-sm="right"
        >
          <b-form-input id="username" type="text" v-model="registrationData.username" required></b-form-input>
        </b-form-group>

        <b-form-group
            label="Passwort:"
            label-for="userpassword"
            label-cols-sm="3"
            label-align-sm="right"
        >
          <b-form-input id="password" type="password" v-model="registrationData.password" required></b-form-input>
        </b-form-group>
        <b-form-group
            label="Passwort wiederholen:"
            label-for="userpasswordrepeat"
            label-cols-sm="3"
            label-align-sm="right"
        >
          <b-form-input id="passwordrepeat" type="password" v-model="registrationData.passwordrepeat"
                        required></b-form-input>
          <p v-if="registrationData.password !== registrationData.passwordrepeat" class="text-danger">Passworteingaben
            stimmen nicht überein</p>
        </b-form-group>
        <b-button @click="register" :disabled="!this.isDisabled" type="submit">Registrieren</b-button>
        <p class="text-danger">{{ errorMessage }}</p>
      </b-form>
    </b-container>
  </div>
  <div>
    <label>Sie haben bereits ein Konto? Hier lang:</label>
    <div>
      <router-link :to="{path: '/login'}">Zum Login</router-link>
    </div>
  </div>
</template>

<script>
import {BButton, BFormGroup, BFormInput} from "bootstrap-vue-3";
import {useUserStore} from "@/stores/UserStore";
import {useLoginStore} from "@/stores/LoginStore";
import {email, required} from "@vuelidate/validators";
import {useVuelidate} from "@vuelidate/core/dist/index.esm";

export default {
  name: "RegistrationFormOrganism",
  components: {BButton, BFormInput, BFormGroup},
  props: [],
  data() {
    return {
      userStore: useUserStore(),
      loginStore: useLoginStore(),
      errorMessage: '',
      registrationData: {
        firstname: '',
        lastname: '',
        email: '',
        emailrepeat: '',
        username: '',
        password: '',
        passwordrepeat: ''
      }
    }
  },
  validations() {
    return {
      registrationData: {
        firstname: {
          required
        },
        lastname: {
          required
        },
        email: {
          required,
          email
        },
        emailrepeat: {
          required,
          email
        },
        username: {
          required,
        },
        password: {
          required,
        },
        passwordrepeat: {
          required,
        },
      }
    }
  },
  setup() {
    return {v$: useVuelidate()}
  },
  computed: {
    isDisabled() {
      return !!(
          this.registrationData.passwordrepeat &&
          this.registrationData.password ===
          this.registrationData.passwordrepeat &&
          this.registrationData.email ===
          this.registrationData.emailrepeat);
    }
  },
  methods: {
    register() {
      if (!this.v$.$invalid) {
        let newUser = {
          firstname: this.registrationData.firstname,
          lastname: this.registrationData.lastname,
          email: this.registrationData.email,
          username: this.registrationData.username,
          password: this.registrationData.password
        }
        this.userStore.postUsers(newUser)
        setTimeout(this.login, 700);
      }
    },
    login() {
      let token = this.loginStore.token
      if (token === '') {
        this.errorMessage = "Etwas hat nicht funktioniert. Bitte probieren Sie es erneut oder wenden Sie sich an info@hotel.at"
      } else {
        this.userStore.readState(token);
        setTimeout(this.redirect, 3000);
      }
    },
    redirect() {
      this.$router.push("/profile" + "/registration")
    }
  }
}
</script>

<style scoped>

</style>