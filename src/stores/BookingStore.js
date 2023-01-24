import {defineStore} from "pinia";
import axios from 'axios';
import {useRoomsAvailability} from "@/stores/useRoomAvailabiltyStore";

const wholeBookingHistoryUrl = "https://boutique-hotel.helmuth-lammer.at/api/v1/bookings"

export const useBookingStore = defineStore('bookingrequest'
    , {
        state: () => ({
            bookings: [],
            bookingRequest: {
                gender: "",
                firstname: "",
                lastname: "",
                email: "",
                birthdate: "",
                breakfast: false,
            },
            bookingId: null,
        }),
        getters: {
            getBookings: (state) => state.bookings,
            getBookingId: (state) => state.bookingId,
            getBookingRequest: (state) => state.bookingRequest,
        },
        actions: {
            readBookings(token) {
                axios.get(wholeBookingHistoryUrl, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
                    .then(response => {
                        this.bookings = response.data
                        console.log(response)
                        console.log(response.data)
                    }).catch(error => {
                    console.log(error)
                });
            },
            requestBookings(token) {
                const availabilityStore = useRoomsAvailability()
                axios.post("https://boutique-hotel.helmuth-lammer.at/api/v1/room/" + availabilityStore.getId + "/from/" + availabilityStore.startDate + "/to/" + availabilityStore.endDate + "", this.bookingRequest, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                })
                    .then(response => {
                        this.bookingId = response.data.id
                        console.log(response)
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        }
    })