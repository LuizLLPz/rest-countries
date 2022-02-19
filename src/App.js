import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import './styles.css';

export const ThemeContext = React.createContext(null);

function App() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div className={'app ' + (theme == 'light' ? 'app-light' :  'app--dark')}>
        <Header/>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
