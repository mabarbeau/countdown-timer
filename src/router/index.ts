import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Form from "../views/Form.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Form",
    component: Form
  },
  {
    path: "/timer/:date",
    name: "Timer",
    props: true,
    component: () =>
      import(/* webpackChunkName: "timer" */ "../views/Timer.vue")
  },
  {
    path: "/:unit/:amount",
    name: "Interpreter",
    props: true,
    component: () =>
      import(/* webpackChunkName: "interpreter" */ "../views/Interpreter.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export { routes };

export default router;
