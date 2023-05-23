import React from "react";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();

  const addBtn = () => {
    dispatch({
      type: "Increment",
    });
  };
  const subBtn = () => {
    dispatch({
      type: "Decrement",
    });
  };
  const incrbyBtn = () => {
    dispatch({
      type: "IncrementByValue",
      payload: 25,
    });
  };

  return (
    <div>
      {/* <h2>{c}</h2> */}
      <button onClick={addBtn}>Increament</button>
      <button onClick={subBtn}>Decreament</button>
      <button onClick={incrbyBtn}>Increment By 25</button>
    </div>
  );
};

export default Home;
