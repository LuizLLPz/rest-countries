import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { FilterSystem } from './components/FilterSystem'
import { FlagsComponent } from './components/FlagsComponent'
import { v4 as uuid } from 'uuid';
import './css/styles.css';

export const ThemeContext = React.createContext(null);

function App() {
  const [theme, setTheme] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  const [data, setData] = useState();
  const [countriesResult, setCountriesResult] = useState()
  const [aliases, setAliases] = useState({});

  useEffect(async() => {
     let resp = await fetch("https://restcountries.com/v3.1/all"); 
     const data = await resp.json();
     setData(
       data.map(item => ({...item, key: uuid()}))
     );
     setAliases(
       data.reduce((aliases, item) => Object.assign(aliases, {[item.cca3] : item.name.common}), {})
     );
     setCountriesResult(data);
  },[]);
  
  const changeCountries = (newCountries) => {
    setCountriesResult(newCountries);
  }


  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div className={`app app--${theme == 'light' ? 'light' :  'dark'} `}>
        <Header/>
        <FilterSystem data={data} setCountries={changeCountries}/>
        <FlagsComponent data={countriesResult} aliases={aliases}/>
      </div> 
    </ThemeContext.Provider>
  );
}

export default App;
