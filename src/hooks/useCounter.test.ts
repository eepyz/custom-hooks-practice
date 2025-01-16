import { renderHook } from "@testing-library/react";
import useCounter from "./useCounter";
import { act } from "react";

describe("useCounter hook", () => {
  it("should initialize counter correctly", () => {
    const { result } = renderHook(() => useCounter(10));

    expect(result.current.counter).toBe(10);
  });

  it("should increment counter", () => {
    const { result } = renderHook(() => useCounter(3));
    // assertion 전에 실행되도록 해줌
    act(() => {
      result.current.increment();
    });

    expect(result.current.counter).toBe(4);
  });

  it("should decrement counter", () => {
    const { result } = renderHook(() => useCounter(3));

    act(() => {
      result.current.decrement();
    });

    expect(result.current.counter).toBe(2);
  });

  it("should reset counter", () => {
    const { result } = renderHook(() => useCounter(3));

    act(() => {
      result.current.decrement();
      result.current.decrement();
      result.current.reset();
    });

    expect(result.current.counter).toBe(3);
  });
});
