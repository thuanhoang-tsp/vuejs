import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import TodoList from '@/components/TodoList.vue'

export const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/todolist', name: 'todolist', component: TodoList },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export const routeKeyMap: Record<string, string> = routes.reduce(
  (map, item) => {
    map[item.path] = item.name as string
    return map
  },
  {} as Record<string, string>,
)

export default router
