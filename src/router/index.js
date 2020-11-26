import Vue from 'vue'
import VueRouter from 'vue-router'
import BlogEdit from '../views/BlogEdit.vue'
import Blogs from '../views/Blogs.vue'
import BlogDetail from '../views/BlogDetail.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    redirect: {name: "Blogs"}
  },
  {
    path: '/blogs',
    name: 'Blogs',
    component: Blogs
  },
  {
    path: '/blog/add',
    name: 'BlogEdit',
    component: BlogEdit
  },
  {
    path: '/blog/:blogid/edit',
    name: 'BlogEdit',
    component: BlogEdit
  },
  {
    path: '/blog/:blogid',
    name: 'BlogDetail',
    component: BlogDetail
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
