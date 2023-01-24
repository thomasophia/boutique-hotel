import {defineStore} from "pinia";
import axios from 'axios';
import {useLoginStore} from "@/stores/LoginStore";

const userApiUrl = "https://boutique-hotel.helmuth-lammer.at/api/v1/user";
const registerApiUrl = "https://boutique-hotel.helmuth-lammer.at/api/v1/register";

export const useUserStore = defineStore('user'
    , {
        state: () => ({
            user: []
        }),
        getters: {
            getUser: (state) => state.user,
        },
        actions: {
            readState(token) {
                axios.get(userApiUrl, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
                    .then(response => {
                        this.user = response.data
                        console.log(response.data)
                    })
                    .catch(error => {
                        console.log(error)
                    });
            },
            postUsers(userJson) {
                const loginRegisteredUser = useLoginStore()
                axios.post(registerApiUrl, userJson, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(function (response) {
                        loginRegisteredUser.setToken(response.data);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            },
        }
    })
