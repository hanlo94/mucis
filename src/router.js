import Vue from "vue";
import Router from "vue-router";
import Index from "./views/index/index.vue";
import indexRecommend from "./views/index/indexRecommend.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      name: "index",
      path: "/index",
      component: Index,
      children: [
        {
          name: "recommend",
          path: "recommend",
          component: indexRecommend
        }
      ]
    }
  ]
});
