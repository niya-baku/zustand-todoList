// store.ts

import { create } from 'zustand';

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

type Filter = 'all' | 'active' | 'completed';

type State = {
  todos: Todo[];
  inputValue: string;
  filter: Filter;
  addTodo: (text: string) => void;
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
  setFilter: (filter: Filter) => void;
  setInputValue: (value: string) => void;
};

const useStore = create<State>((set) => ({
  todos: [],
  inputValue: '',
  filter: 'all',
  addTodo: (text) => set((state) => ({ todos: [...state.todos, { id: state.todos.length + 1, text, completed: false }] })),
  removeTodo: (id) => set((state) => ({ todos: state.todos.filter(todo => todo.id !== id) })),
  toggleTodo: (id) => set((state) => ({
    todos: state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    })
  })),
  setFilter: (filter) => set({ filter }),
  setInputValue: (value) => set({ inputValue: value }),
}));

export { useStore };


