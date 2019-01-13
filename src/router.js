import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Notation from "./views/Notation.vue";
import Epreuve from "./views/Epreuve.vue";
import Grades from "./views/Grades.vue";

Vue.use(Router);

export default new Router({
  //mode: 'history',
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/grades",
      name: "grades",
      component: Grades
    },
    {
      path: "/epreuve",
      name: "epreuve",
      component: Epreuve
    },
    {
      path: "/notation",
      name: "notation",
      component: Notation
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
