import useCounter from "../hooks/useCounter";

function Counter() {
  const { counter, increment, decrement, reset } = useCounter(0);
  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;
