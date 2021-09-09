import React, { useEffect } from 'react';
import './App.css';
import Input from './Components/Input';
import People from './Components/People';
import {useSettingStore} from './store';

function App() {

  const toggleDarkMode = useSettingStore(state => state.toggleDarkMode)
  const dark = useSettingStore(state => state.dark)

  useEffect(()=>{
	if(dark){
    		document.querySelector('body').classList.add("dark")
  	}else{
    		document.querySelector('body').classList.remove("dark")
  	}
}, [dark])

  return (
    <div>
      <button onClick={toggleDarkMode}>Toggle Mode</button>
      <p>Peoples</p>
      <Input/>
      <People/>
    </div>
  );
}

export default App;
