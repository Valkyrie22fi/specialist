import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/components/Task/Views/HomeView.vue";
import MyProdactsView from "@/components/Task/Views/MyProdactsView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView
  },
  {
    path: "/products",
    name: "MyProdacts",
    component: MyProdactsView
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
