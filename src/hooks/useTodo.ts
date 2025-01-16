import { useCallback, useReducer } from "react";
import { todoReducer } from "../reducers/todoReducer";

const useTodo = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);

  const add = useCallback((text: string) => {
    dispatch({ type: "ADD", text });
  }, []);

  const remove = useCallback((id: number) => {
    dispatch({ type: "REMOVE", id });
  }, []);

  const toggle = useCallback((id: number) => {
    dispatch({ type: "TOGGLE", id });
  }, []);

  return {
    add,
    remove,
    toggle,
    todos,
  };
};
export default useTodo;
