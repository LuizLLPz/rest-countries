import { useContext } from 'react';
import { ThemeContext } from '../App'
import { Header } from './Header';
import { checkTheme } from '../utils/Utils';
import '../css/modal_styles.css';


export const Modal = (props) => {
	const { theme } = useContext(ThemeContext);
	const {country, aliases, visibility, change} = props;

	// Get destructured properties of country and border countries if available
	const { name, flags, population, capital, region, subregion, tld, currencies, languages, }
	= country ? country : '';

	//Define currencies, languages and borders JSX
	let borders = null;
	if (country) {
		if ('borders' in country) borders = country.borders;
	}
	const currKeys = currencies ? Object.keys(currencies) : null;
	const langKeys = languages ? Object.keys(languages) : null; 
	const currenciesBlock = currencies ? (
		<div className="details__item">
			<span className="bold">
				Currencies:
			</span>
			{currKeys.map(
				key => {
					return ` ${currencies[key].name}${currKeys.indexOf(key)
							!= currKeys.length - 1 ? ", " : ""}`
				}
			)}
		</div>
		)	: '';
	const languagesBlock = languages ? (
		<div className="details__item">
			<span className="bold">
				Languages:
			</span>
			{langKeys.map(
				key => {
					return ` ${languages[key]}${langKeys.indexOf(key)
							!= langKeys.length - 1 ? ", " : ""}`
				}
			)}
		</div>
	) : '';

	const bordersBlock = borders ? (
		<div className="details__item details__border">
			<div className="border__box">

				<span className="bold">
					Border Countries:
				</span>
				{borders.map(
						item => {
						return (
								<button className={`border__button ${checkTheme(undefined,theme)}`}>
										{aliases[item]}
								</button>
								)
						}
				)}
			</div>
		</div>
	) : '';

	return (
		<div className={`modal ${checkTheme('app', theme)}`}
		style={{visibility : visibility ? 'visible' : 'hidden'}}
		>

		{country &&
			<>
				<Header/>
				<div className="modal__container">
					<div className={`modal__goBack ${checkTheme(undefined, theme)}`} onClick={() => change(null)}>
					 	{`<- Back`}
					</div>

					<div className="modal__country">
						<img src={flags.png} alt={`${name.common} flag`} 
						className={`country__flag ${checkTheme(undefined, theme)}`}/>
						<div className="country__details" >
							<h1 className="details__name">{name.common}</h1>
							<div className="details__item"><span className="bold">Native name:</span>{Object.values(name.nativeName)[0].common}</div>
							<div className="details__item"><span className="bold">Population:</span> {population}</div>
							<div className="details__item"><span className="bold">Region:</span> {region}</div>
							<div className="details__item"><span className="bold">Sub Region</span>: {subregion}</div>
							<div className="details__item" ><span className="bold">Capital:</span> {capital}</div>
							<div className="details__right">
								<div className="details__item"><span className="bold">Top level domain:</span> {tld}</div>
								{/*Map the list of currencies and add a comma if necessary */}
								{currenciesBlock}
								{languagesBlock}
							</div>
								{bordersBlock}
							

						</div>
					</div>
				</div>
			</>
		}
		</div>

	);
}