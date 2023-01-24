import { createRouter, createWebHistory } from 'vue-router';
import HotelPage from "@/components/Pages/HotelStartPage";
import RoomPage from "@/components/Pages/RoomsPage";
import LoginPage from "@/components/Pages/LoginPage";
import BookingPage from "@/components/Pages/BookingPage";
import ProfilePage from "@/components/Pages/ProfilePage";
import ConfirmationPage from "@/components/Pages/ConfirmationPage";
import AboutPage from "@/components/Pages/AboutPage";
import ImpressumPage from "@/components/Pages/ImpressumPage";
import BookingHistoryPage from "@/components/Pages/BookingHistoryPage";
import RegisterPage from "@/components/Pages/RegisterPage";


const routes = [
  {path: '/', name: 'home', component: HotelPage},
  {path: '/rooms', name:'rooms', component: RoomPage},
  {path: '/login', name: 'login', component: LoginPage},
  {path: '/booking/:id?', name:'booking', component: BookingPage, props: true},
  {path: '/profile/:registration?', name:'profile', component: ProfilePage, props: true},
  {path: '/confirmation', name:'confirmation', component: ConfirmationPage},
  {path: '/about', name:'about', component:  AboutPage},
  {path: '/impressum', name:'impressum', component: ImpressumPage},
  {path: '/bookinghistory', name:'bookinghistory', component: BookingHistoryPage},
  {path: '/register', name:'register', component: RegisterPage},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
