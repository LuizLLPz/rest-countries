import { useContext } from 'react';
import { ThemeContext } from '../App.js'
import {Header } from './Header';
import '../css/modal_styles.css'


export const Modal = (props) => {
	const { theme } = useContext(ThemeContext);
	const {country, visibility, change} = props;
	// Get destructured properties of country if available
	const { name, flags, population, capital, region, subregion, tld, currencies, languages } = country ? country : '';
	if (country) console.log(country);
	return (
		<div className={`modal app--${theme =='light' ? 'light' : 'dark'}`}
		style={{visibility : visibility ? 'visible' : 'hidden'}}
		>

		{country &&
			<>
				<Header/>
				<div className="modal__container">
					<div className={`modal__goBack container--${theme =='light' ? 'light' : 'dark'}`} onClick={() => change(null)}>
					 	{`<- Back`}
					</div>

					<div className="modal__country">
						<img src={flags.png} alt={`${name.common} flag`} 
						className={`country__flag container--${theme =='light' ? 'light' : 'dark'}`}/>
						<div className="country__details" >
							<h1 className="details__name">{name.common}</h1>
							<div>Native name:{Object.values(name.nativeName)[0].common}</div>
							<div>Population: {population}</div>
							<div>Region: {region}</div>
							<div>Sub Region: {subregion}</div>
							<div>Capital: {capital}</div>
							<div>Top level domain:{tld}</div>
							<div>Currencies: {Object.keys(currencies).map(key => currencies[key].name)}</div>
							<div>Languages: {Object.keys(languages).map(key => languages[key] + ", ")}</div>
						</div>
					</div>
				</div>
			</>
		}
		</div>

	);
}