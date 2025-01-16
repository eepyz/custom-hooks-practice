export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

type TodoAction = { type: "ADD"; text: string } | { type: "TOGGLE"; id: number } | { type: "REMOVE"; id: number };

export const todoReducer = (state: Todo[], action: TodoAction) => {
  switch (action.type) {
    case "ADD":
      return [...state, { id: Date.now(), text: action.text, completed: false }];
    case "TOGGLE":
      return state.map((todo) => (todo.id === action.id ? { ...todo, completed: !todo.completed } : todo));
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};
