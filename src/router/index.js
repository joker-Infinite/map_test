import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/home.vue";
import mapDot from "../pages/mapDot.vue";
import ECharts from "../pages/echarts_test";
import jingvis from "../pages/jingvis";
import gas from "../pages/gas";
import showECharts from "../pages/common/showECharts"
import intAndOut from "../pages/secondaryPage/intAndOut";
import gas_ from "../pages/secondaryPage/gas_";
import unkonw from "../pages/secondaryPage/unkonw";
import showBottomECharts from "../pages/common/showBottomECharts";
import gasDatas from "../pages/secondaryPage/gasDatas";
import petrolStation from "../pages/petrolStation";
import profit from "../pages/profit";
import TaskCompletionRate from "../pages/TaskCompletionRate";

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
    {
        path: "/gas_",
        name: "gas_",
        component: gas_
    },
    {
        path: "/showECharts",
        name: "showECharts",
        component: showECharts
    },/* {
        path: "/intAndOut",
        name: "intAndOut",
        component: intAndOut
    },*/
    {
        path: "/unkonw",
        name: "unkonw",
        component: unkonw
    },
    {
        path: "/showBottomECharts",
        name: "showBottomECharts",
        component: showBottomECharts
    },
    {
        path: "/gasDatas",
        name: "gasDatas",
        component: gasDatas
    },
    {
        path: "/petrolStation",
        name: "petrolStation",
        component: petrolStation
    },
    {
        path: "/profit",
        name: "profit",
        component: profit
    },
    {
        path: "/TaskCompletionRate",
        name: "TaskCompletionRate",
        component: TaskCompletionRate
    },
];

const router = new VueRouter({
    routes
});

export default router;
