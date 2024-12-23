export const fetchUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  return response.json()
}

export const fetchTodosByUserId = async (userId: number | null) => {
  if (userId === null) return []
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
  return response.json()
}

export const fetchTodoById = async (id: number) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
  return response.json()
} 
