import React from "react";
import { Increment, Decrement } from "./redux/counter/action";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((data) => data.Reducer);

  return (
    <div>
      <p>{data}</p>
      <button onClick={() => dispatch(Increment(1))}>+</button>
      <button onClick={() => dispatch(Decrement(1))}>-</button>
    </div>
  );
};

export default App;
