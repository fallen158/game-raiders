import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";
import Raiders from "@/views/Raiders.vue";
import Video from "@/views/Video.vue";

Vue.use(Router);

//上手指南
import Interface from "@/views/Interface.vue";
import Mode from "@/views/Mode.vue";
import Intelligence from "@/views/Intelligence.vue";
import Militarys from "@/views/Militarys.vue";
import Monarch from "@/views/Monarch.vue";
import Fighting1 from "@/views/Fighting1.vue";
import Fighting2 from "@/views/Fighting2.vue";
//系统详解
import Intelligences from "@/views/Intelligences.vue";
import Overview from "@/views/Overview.vue";
import Personnel1 from "@/views/Personnel1.vue";
import Personnel2 from "@/views/Personnel2.vue";
import Military from "@/views/Military.vue";
import Strategy1 from "@/views/Strategy1.vue";
import Strategy2 from "@/views/Strategy2.vue";
import Plan from "@/views/Plan.vue";
import Purchase from "@/views/Purchase.vue";
import FightingArticle1 from "@/views/FightingArticle1.vue";
import FightingArticle2 from "@/views/FightingArticle2.vue";
//武将图鉴
import WeiJiang1 from "@/views/WeiJiang1.vue";
import WeiJiang2 from "@/views/WeiJiang2.vue";
import JinJiang1 from "@/views/JinJiang1.vue";
import JinJiang2 from "@/views/JinJiang2.vue";
import WuJiang1 from "@/views/WuJiang1.vue";
import WuJiang2 from "@/views/WuJiang2.vue";
import WuJiang3 from "@/views/WuJiang3.vue";
import Qunxiong1 from "@/views/Qunxiong1.vue";
import Qunxiong2 from "@/views/Qunxiong2.vue";
import ShuJiang1 from "@/views/ShuJiang1.vue";
import ShuJiang2 from "@/views/ShuJiang2.vue";
import ShuJiang3 from "@/views/ShuJiang3.vue";


export default new Router({
  // mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/home",
      redirect: "/",
      component: Home
    },
    {
      path: "/video",
      component: Video
    },
    {
      path: "/raiders",
      component: Raiders
    },
    //上手指南
    { path: "/raiders/interface", component: Interface },
    { path: "/raiders/mode", component: Mode },
    { path: "/raiders/intelligence", component: Intelligence },
    { path: "/raiders/militarys", component: Militarys },
    { path: "/raiders/monarch", component: Monarch },
    { path: "/raiders/fighting1", component: Fighting1 },
    { path: "/raiders/fighting2", component: Fighting2 },
    //系统详解
    { path: "/raiders/intelligences", component: Intelligences },
    { path: "/raiders/overview", component:  Overview },
    { path: "/raiders/personnel1", component: Personnel1 },
    { path: "/raiders/personnel2", component: Personnel2 },
    { path: "/raiders/military", component: Military },
    { path: "/raiders/strategy1", component: Strategy1 },
    { path: "/raiders/strategy2", component: Strategy2 },
    { path: "/raiders/plan", component: Plan },
    { path: "/raiders/purchase", component: Purchase },
    { path: "/raiders/fightingArticle1", component: FightingArticle1 },
    { path: "/raiders/fightingArticle2", component: FightingArticle2 },
    //武将图鉴
    { path: "/raiders/WeiJiang1", component: WeiJiang1 },
    { path: "/raiders/WeiJiang2", component: WeiJiang2 },
    { path: "/raiders/JinJiang1", component: JinJiang1 },
    { path: "/raiders/JinJiang2", component: JinJiang2},
    { path: "/raiders/WuJiang1", component: WuJiang1 },
    { path: "/raiders/WuJiang2", component: WuJiang2 },
    { path: "/raiders/WuJiang3", component: WuJiang3 },
    { path: "/raiders/Qunxiong1", component: Qunxiong1 },
    { path: "/raiders/Qunxiong2", component: Qunxiong2},
    { path: "/raiders/ShuJiang1", component: ShuJiang1 },
    { path: "/raiders/ShuJiang2", component: ShuJiang2 },
    { path: "/raiders/ShuJiang3", component: ShuJiang3 },
    { path: "*", component: Home, redirect: "/" }
  ]
});
