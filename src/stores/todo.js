import { defineStore } from "pinia";

export const useTodoStore = defineStore('todo', {
    state: () => ({
        todos: [
            { id: 1, title: 'take vitamins', completed: true },
            { id: 2, title: 'get groceries', completed: false },
            { id: 3, title: 'workout', completed: false },
            { id: 4, title: 'cpp assignment', completed: false },
        ]
    }),
    actions: {
        addTodo(todo) {
            this.todos.push({
                id: Math.floor(Math.random() * 10000),
                title: todo,
                completed: false
            });
        },
        deleteTodo(id) {
            this.todos = this.todos.filter(t => t.id != id);
        },
        toggleTodo(id) {
            const todo = this.todos.find(t => t.id === id);
            todo.completed = !todo.completed;
        }
    }

});