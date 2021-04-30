import Vue from "vue";
import Router from "vue-router";
import paginaInicial from "../components/paginaInicial"
import estudios from "../components/estudios"
import tatuadores from "../components/tatuadores"


Vue.use(Router);
const routes = [
  { 
    path: "",
    name: "paginaInicial",
    component: paginaInicial,
    meta: {
      title: "Página Inicial",
    },
  },
  { 
    path: "/estudios",
    name: "estudios",
    component: estudios,
    meta: {
      title: "Estudios",
    },
  },
  { 
    path: "/tatuadores",
    name: "tatuadores",
    component: tatuadores,
    meta: {
      title: "Tatuadores",
    },
  },

];

const router = new Router({ routes, mode: "hash" });

router.beforeEach((to, from, next) => {
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.title);

  const nearestWithMeta = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.metaTags);

  if (nearestWithTitle) document.title = nearestWithTitle.meta.title;

  Array.from(
    document.querySelectorAll("[data-vue-router-controlled]")
  ).map((el) => el.parentNode.removeChild(el));

  if (!nearestWithMeta) return next();

  nearestWithMeta.meta.metaTags
    .map((tagDef) => {
      const tag = document.createElement("meta");

      Object.keys(tagDef).forEach((key) => {
        tag.setAttribute(key, tagDef[key]);
      });

      tag.setAttribute("data-vue-router-controlled", "");

      return tag;
    })
    .forEach((tag) => document.head.appendChild(tag));

  next();
});
export default router;
