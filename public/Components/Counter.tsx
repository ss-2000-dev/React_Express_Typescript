// useReducer を用いた Counter
import React, { useReducer } from "react";

// Action types
type Inc = {
  type: "Inc";
  step: number;
};
type Dec = {
  type: "Dec";
  step: number;
};
type Reset = {
  type: "Reset";
  value: number;
};

type Action = Inc | Dec | Reset;

export const Counter = () => {
  // Action creators
  const inc: (step?: number) => Inc = (step = 1) => ({ type: "Inc", step });
  // type "Inc" と step(1) 渡している
  // function inc(step: number = 1) {
  //   return { type: "Inc", step };
  // }
  const dec: (step?: number) => Dec = (step = 1) => ({ type: "Dec", step });
  const reset: (value?: number) => Reset = (value = 0) => ({
    type: "Reset",
    value,
  });

  // const reducer = (state: number → 現在の State, action: Action → ex.{ type: "Inc", step }): number => {
  const reducer = (state: number, action: Action): number => {
    switch (action.type) {
      case "Inc":
        return state + action.step;
      case "Dec":
        return state - action.step;
      case "Reset":
        return action.value;
    }
  };

  const [count, dispatch] = useReducer(reducer, 0);
  // const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <span>{count}</span>
      <button onClick={() => dispatch(inc())}>+</button>
      <button onClick={() => dispatch(dec())}>-</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};
