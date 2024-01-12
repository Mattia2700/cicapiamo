import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/pages/Home.vue"),
  },
  {
    path: "/answer",
    name: "answer",
    component: () => import("@/pages/Answer.vue"),
  },
  {
    path: "/question",
    name: "question",
    component: () => import("@/pages/Question.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
