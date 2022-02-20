import { useContext } from 'react';
import { ThemeContext } from '../App';

export const FlagsComponent = (props) => {
	const { data } = props;
	const { theme } = useContext(ThemeContext);

	if (!data) {
		return (
			<div>Carregando países!</div>
		)
	} else { 
		return (
				<div className="flags_container" onClick={() => console.log(data)}>
				{data.map( item => {
					return (
						<div className={"container__card " + 
							(theme == 'light' ? "container__card--light" : "container__card--dark")}>
							<div className="card__image" style={{backgroundImage: `url(${item.flags.svg})`}}>
								 
							</div>
							<h1 className={'card__header'}>
								{item.name.common}
							</h1>
							<div className="card__info"><b>Population:</b> {item.population} </div>
							<div className="card__info"><b>Region:</b> {item.region} </div>
							<div className="card__info"><b>Capital:</b> {item.capital}</div>

						</div>
					);
				})}
			</div>

		);
	}
}