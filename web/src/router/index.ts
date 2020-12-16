import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Chapters from "@/components/Chapters.vue";
import ChapterDetails from "@/components/ChapterDetails.vue"


const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Chapters",
    component: Chapters,
  },
  {
    path: "/chapter/:chapterId",
    name: "Chapter",
    alias: "/chapter",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ChapterDetails,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
