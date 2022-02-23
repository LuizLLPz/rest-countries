import { useContext } from 'react';
import { ThemeContext } from '../App';
import { checkTheme } from '../utils/Utils';

export const FilterSystem = (props) => {
	const { theme } = useContext(ThemeContext);
	const { data, setCountries } = props;

	const changeBySearch = (e) => {
		let {value: val} = e.target;
		if (val != '') {
			const filteredCountries = data.filter(country => country.name.common.toLowerCase().includes(val.toLowerCase()));
			setCountries(filteredCountries);
		} else {
			setCountries(data);
		}
	}

	const changeByFilter = (e) => {
		const {value: val} = e.target;
		if (val != 'none') {
			const filteredCountries = data.filter(country => country.region == val);
			setCountries(filteredCountries);
		} else  {
			setCountries(data);
		}
	}

	return (
		<div className="filters">
			<div className={`filters__search ${checkTheme(undefined, theme)}`}>
				<img className="search__img"/>
				<input type="text" className={`search__input search__input--${theme == 'light' ? 'light' : 'dark'}`}
			 	onChange={e => changeBySearch(e)} placeholder="Search for a country..."/>
			</div>
			<select className={`filters__select ${checkTheme(undefined, theme)}`} onChange={e => changeByFilter(e)}>
			 		<option value="none">No Region</option>
			 		<option value="Africa">Africa</option>
			 		<option value="Americas">América</option>
			 		<option value="Asia">Asia</option>
			 		<option value="Europe">Europe</option>
			 		<option value="Oceania">Oceania</option>
			 </select>
		</div>
	);
}