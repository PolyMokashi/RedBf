import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginHospital from '../views/LoginHospital.vue'
import LoginBlood from '../views/LoginBlood.vue'
import BloodAbout from '../views/BloodAbout.vue'
import DashBoardHospital from '../views/DashBoardHospital'
import DashBoardBlood from '../views/DashBoardBlood'
import RegisterHospital from '../views/RegisterHospital'
import RegisterBlood from '../views/RegisterBlood'
import DonorsBlood from '../views/DonorsBlood'
import BloodDetails from '../views/BloodDetails'
import BloodRequests from '../views/BloodRequests'
import HospitalRequests from '../views/HospitalRequests'
import ReqStatus from '../views/ReqStatus'
import AdminDashBoard from '../views/AdminDashBoard'
import AdminLogin from '../views/AdminLogin'
import ErrorPage from '../views/ErrorPage.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'hospital_login',
    component: LoginHospital
  },

  {
    path: '/LoginBlood',
    name: 'Blood_login',
    component: LoginBlood
  },
  {
    path: '/BloodAbout',
    name: 'blood_about',
    component: BloodAbout
  },
  {
    path: '/BloodBank',
    name: 'blood_bank_dashboard',
    component: DashBoardBlood
  },
  {
    path: '/RegisterHospital',
    name: 'hospital_register',
    component: RegisterHospital
  },
  {
    path: '/RegisterBlood',
    name: 'blood_register',
    component: RegisterBlood
  },
  {
    path: '/Hospital',
    name: 'hospital_dashboard',
    component: DashBoardHospital
  },
  {
    path: '/donors',
    name: 'donors',
    component: DonorsBlood
  },
  {
    path: '/details',
    name: 'Blood_details',
    component: BloodDetails
  },
  {
    path: '/requests',
    name: 'Blood_requests',
    component: BloodRequests
  },
  {
    path: '/hospitalrequests',
    name: 'hospital_requests',
    component: HospitalRequests
  },
  {
    path: '/status',
    name: 'request_status',
    component: ReqStatus
  },
  {
    path: '/AdminDashboard',
    name: 'admin_dashboard',
    component: AdminDashBoard
  },
  {
    path: '/AdminLogin',
    name: 'admin_login',
    component: AdminLogin
  },
  {
    path: '**',
    name: 'ErrorPage',
    component: ErrorPage,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
