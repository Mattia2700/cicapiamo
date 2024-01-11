import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/pages/Home.vue"),
  },
  {
    path: "/answer",
    name: "Answer",
    component: () => import("@/pages/Answer.vue"),
  },
  {
    path: "/question",
    name: "Question",
    component: () => import("@/pages/Question.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
