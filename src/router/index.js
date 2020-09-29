import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/home.vue";
import mapDot from "../pages/mapDot.vue";
import ECharts from "../pages/echarts_test";
import jingvis from "../pages/jingvis";
import gas from "../pages/gas";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/mapDot",
    name: "mapDot",
    component: mapDot
  },
  {
    path: "/ECharts",
    name: "ECharts",
    component: ECharts
  },
  {
    path: "/jingvis",
    name: "jingvis",
    component: jingvis
  },
  {
    path: "/gas",
    name: "gas",
    component: gas
  },
];

const router = new VueRouter({
  routes
});

export default router;
