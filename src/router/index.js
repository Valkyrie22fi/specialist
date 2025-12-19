import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/components/Task/Views/HomeView.vue";
import MyProdactsView from "@/components/Task/Views/MyProdactsView.vue";
import PageNotFoundView from "@/components/Task/Views/PageNotFoundView.vue";

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
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: PageNotFoundView
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
