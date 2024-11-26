import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/components/HomePage.vue";
import TodoList from "@/components/TodoList.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage
    },
    {
        path: '/todolist',
        name: 'todolist',
        component: TodoList
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router