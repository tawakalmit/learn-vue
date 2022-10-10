import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/About.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../views/Contact.vue"),
    },
    {
      path: "/products",
      name: "product",
      component: () => import("../views/Products.vue"),
    },
    {
      path: "/faq",
      name: "faq",
      component: () => import("../views/Faq.vue"),
    },
  ],
});

export default router;
