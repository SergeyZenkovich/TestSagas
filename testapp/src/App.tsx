import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch } from 'react-redux';
import { FilterComponent } from './componetns/FilterComponent';
import { Posts } from './componetns/Posts';

const App: React.FC  = () => {
  const [personIds, setPersonsIds] = useState<number[]>([]);
  const dispatch = useDispatch();
  return (
    <div className="App">
    <FilterComponent personIds={personIds} setPersonsIds={setPersonsIds}/>
    <Posts personIds={personIds}/>
    </div>
  );
}

export default App;
