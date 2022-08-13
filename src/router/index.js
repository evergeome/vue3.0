import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import BlogView from "../views/BlogView.vue";
import AboutView from "../views/AboutView.vue";
import HelpView from "../views/HelpView.vue";

const routes = [
	{
		path: "/",
		name: "home",
		component: HomeView,
	},
	{
		path: "/blog",
		name: "blog",
		component: BlogView,
	},
	{
		path: "/about",
		name: "about",
		component: AboutView,
	},
	{
		path: "/help",
		name: "help",
		component: HelpView,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
