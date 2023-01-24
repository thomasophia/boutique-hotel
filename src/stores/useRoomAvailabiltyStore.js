import {defineStore} from "pinia";
import axios from 'axios';

export const useRoomsAvailability = defineStore('roomAvailability', {
    state: () => ({
        url: "",
        available: [],
        id: null,
        startDateRaw: null,
        startDate: "",
        endDateRaw: null,
        endDate: "",
        dateProxy: null
    }),
    getters: {
        getAvailability: (state) => state.available,
        getId() {
            return this.id
        },
        getStartDateRaw() {
            return this.startDateRaw
        },
        getEndDateRaw() {
            return this.endDateRaw
        },
        getStartDate() {
            return this.startDate
        },
        getEndDate() {
            return this.endDate
        }
    },
    actions: {
        readState() {
            axios.get(this.url)
                .then(
                    response => {
                        this.available = response.data
                    })
                .catch(error => {
                    console.log(error)
                })
        },
        setUrl() {
            this.url = "https://boutique-hotel.helmuth-lammer.at/api/v1/room/" + this.id + "/from/" + this.startDate + "/to/" + this.endDate
        },
        setId(id) {
            this.id = id
        },
        setDateObject(date) {
            this.startDateRaw = new Date(date[0]);
            this.startDate = this.startDateRaw.toISOString().split("T")[0]
            this.endDateRaw = new Date(date[1]);
            this.endDate = this.endDateRaw.toISOString().split("T")[0]
        },
    }
})
