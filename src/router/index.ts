import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Form from "../views/Form.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Form",
    component: Form
  },
  {
    path: "/timer",
    name: "Timer",
    props: true,
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Timer.vue")
  },
  {
    path: "*",
    name: "Interpreter",
    props: true,
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Interpreter.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
