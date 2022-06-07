import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/todos/1'

interface Todo {
    id: number
    title: string
    completed: boolean
}

axios.get(url).then((res) => {
    const fetchedTodo: Todo = res.data

    const id = fetchedTodo.id
    const title = fetchedTodo.title
    const completed = fetchedTodo.completed

    logTodo(id, title, completed)
})

const logTodo = (id: number, title: string, completed: boolean) => {
    console.log(`
    The Todo with ID: ${id}
    Has a title of: ${title}
    Is it finished? ${completed}
    `)
}
