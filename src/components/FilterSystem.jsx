import { useContext } from 'react';
import { ThemeContext } from '../App';


export const FilterSystem = () => {
	const { theme } = useContext(ThemeContext);
	return (
		<div className="filters">
			<div className={"filters__search " +
			 (theme == 'light' ? 'filters__search--light' : 'filters__search--dark')
			}>
				<img className="search__img"/>
				<input type="text" className={"search__input " +
			 	(theme == 'light' ? 'search__input--light' : 'search__input--dark')}
			 	/>
			</div>
		</div>
	);
}