import Vue from "vue";
import Router from "vue-router";
import firebase from "firebase";

import Notation from "./views/Notation.vue";
import Epreuve from "./views/Epreuve.vue";
import Grades from "./views/Grades.vue";
import Login from "./views/Login.vue";

Vue.use(Router);

const router = new Router({
  //mode: 'history',
  routes: [
    {
      path: "/",
      redirect: "login"
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/grades",
      name: "grades",
      component: Grades,
      meta: { requiresAuth: true }
    },
    {
      path: "/grades/:gid/epreuve",
      name: "epreuve",
      component: Epreuve,
      meta: { requiresAuth: true }
    },
    {
      path: "/grades/:gid/epreuve/notation",
      name: "notation",
      component: Notation,
      meta: { requiresAuth: true }
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

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next("login");
  //else if (!requiresAuth && currentUser) next("grades");
  else next();
});

export default router;
