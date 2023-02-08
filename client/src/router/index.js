import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import RegisterPage from '../views/RegisterPage.vue'
import AddFormItem from '../views/AddFormItem.vue'
import BiographyPage from '../views/BiographyPage.vue'
import HomePage from '../views/HomePage.vue'
import ContactPage from '../views/ContactPage.vue'
import DicographyPage from '../views/DiscographyPage.vue'
import MerchandisePage from '../views/MerchandisePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterPage
    },
    {
      path: '/addFormItem',
      name: 'addFormItem',
      component: AddFormItem
    },
    {
      path: '/biography',
      name: 'biography',
      component: BiographyPage
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactPage
    },
    {
      path: '/discography',
      name: 'discography',
      component: DicographyPage
    },
    {
      path: '/merchandise',
      name: 'merchandise',
      component: MerchandisePage
    }
  ]
})

export default router
