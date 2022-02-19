import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { FilterSystem } from './components/FilterSystem'
import { FlagsComponent } from './components/FlagsComponent'

import './styles.css';

export const ThemeContext = React.createContext(null);

function App() {
  const [theme, setTheme] = useState('light');
  const [data, setData] = useState();
  useEffect(async() => {
     let resp = await fetch("https://restcountries.com/v3.1/all"); 
     const data = await resp.json();
     setData(data);
  },[]);
  

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div className={'app ' + (theme == 'light' ? 'app-light' :  'app--dark')}>
        <Header/>
        <FilterSystem/>
        <FlagsComponent data={data}/>
      </div> 
    </ThemeContext.Provider>
  );
}

export default App;
