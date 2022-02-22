import { useContext } from 'react';
import { ThemeContext } from '../App';


export const FilterSystem = () => {
	const { theme } = useContext(ThemeContext);
	return (
		<div className="filters">
			<div className={`filters__search container--${theme == 'light' ? 'light' : 'dark'}`}>
				<img className="search__img"/>
				<input type="text" className={`search__input search__input\--${theme == 'light' ? 'light' : 'dark'}`}
			 	placeholder="Search for a country..."/>
			</div>
		</div>
	);
}