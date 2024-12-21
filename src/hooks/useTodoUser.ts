import { ref } from 'vue'
import { fetchTodosByUserId, fetchTodoById } from '@/apis/user'
import type { Todo } from '@/type/User/Todo'

export const useTodos = () => {
  const todoOfUser = ref<Todo[]>([])
  const isLoading = ref(false)

  const loadTodos = async (userId: number | null) => {
    isLoading.value = true
    try {
      const todos = await fetchTodosByUserId(userId)
      todoOfUser.value = todos.sort((a: Todo, b: Todo) => Number(a.completed) - Number(b.completed))
    } catch (err) {
      console.error(err)
    } finally {
      isLoading.value = false
    }
  }

  const updateTodo = async (id: number) => {
    isLoading.value = true
    try {
      const updatedTodo = await fetchTodoById(id)
      todoOfUser.value = todoOfUser.value
        .map((todo) => (todo.id === updatedTodo.id ? { ...todo, completed: true } : todo))
        .sort((a: Todo, b: Todo) => Number(a.completed) - Number(b.completed))
    } catch (err) {
      console.error(err)
    } finally {
      isLoading.value = false
    }
  }

  return { todoOfUser, isLoading, loadTodos, updateTodo }
}
