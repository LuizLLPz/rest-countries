import { useContext } from 'react';
import { ThemeContext } from '../App.js';

function changeTheme (theme, func) {
	func(theme == 'light' ? 'dark' : 'light');
}

export const Header = () => {

	return (
		<ThemeContext.Consumer>	
			{context => (	
			<div className={'header ' + (context.theme == 'light' ? 'header--light' : 'header--dark')}>
				<h1>Where in the world?</h1>
				<div className="theme_switcher" onClick={() => changeTheme(context.theme, context.setTheme)}>
					{context.theme == 'light' ? 'Light Mode' : 'Dark mode'}
				</div>
				
			</div>
		)}
		</ThemeContext.Consumer>
	);
}