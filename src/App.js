import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { FilterSystem } from './components/FilterSystem'
import { FlagsComponent } from './components/FlagsComponent'
import { v4 as uuid } from 'uuid';
import './css/styles.css';

export const ThemeContext = React.createContext(null);

function App() {
  const [theme, setTheme] = useState('light');
  const [data, setData] = useState();
  useEffect(async() => {
     let resp = await fetch("https://restcountries.com/v3.1/all"); 
     const data = await resp.json();
     console.log(data)
     setData(
       data.map(item => ({...item, key: uuid()}))
     );

  },[]);
  

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div className={`app app--${theme == 'light' ? 'light' :  'dark'} `}>
        <Header/>
        <FilterSystem/>
        <FlagsComponent data={data}/>
      </div> 
    </ThemeContext.Provider>
  );
}

export default App;
