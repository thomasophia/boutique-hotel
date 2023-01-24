import {defineStore} from "pinia";
import axios from 'axios';

const loginApiUrl = "https://boutique-hotel.helmuth-lammer.at/api/v1/login";

export const useLoginStore = defineStore('login', {
    state: () => ({
        token: ""
    }),
    getters: {
        getToken: (state) => state.token,
    },
    actions: {
        login(clientId, secret) {
            axios.post(loginApiUrl, {
                clientId: clientId,
                secret: secret
            })

                .then(
                    response => {
                        console.log(response.data)
                        this.token = response.data
                    })
                .catch(function (error) {
                    console.log(error);
                });
        },
        setToken(token) {
            this.token = token;
            console.log("setToken" + this.token)
        }
    }
})