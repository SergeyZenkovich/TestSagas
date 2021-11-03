import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Child } from './componetns/Children';
import { useDispatch } from 'react-redux';

const App: React.FC  = () => {
  const [value, setValue] = useState([1, 2]);
  const setAdd = () => {
    setValue([...value, value[value.length - 1] + 1]);
    dispatch({type: 'CLICK2'});
  }
  const dispatch = useDispatch();
  return (
    <div className="App">
     <button onClick={setAdd}>Click on me</button>
     {value.map((el: number) => <Child num={el}/>)}
    </div>
  );
}

export default App;
