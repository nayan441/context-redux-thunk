// CounterComponent.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset } from './state/reducer';

const CounterComponent = () => {
  const {count} = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

export default CounterComponent;
