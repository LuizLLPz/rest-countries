import { useContext } from 'react';
import { ThemeContext } from '../App';
import { Modal } from './Modal';

export const FlagsComponent = (props) => {
	const { data } = props;
	const { theme } = useContext(ThemeContext);

	if (!data) {
		return (
			<div>Carregando países!</div>
		);
	} else { 
		return (
				<>
					<Modal/>
					<div className="flags_container" onClick={() => console.log(data)}>
						{data.map( item => {
							return (
								<div className={`container__card container__card--${theme == 'light' ? 'light' : 'dark'}`}
									onClick={ () => {
										alert('pega na minhahahaha')		
								}}>
									<div className="card__image" style={{backgroundImage: `url(${item.flags.svg})`}}> 
									</div>
									<h1 className={'card__header'}>
										{item.name.common}
									</h1>
									<div className="card__info">
										<span class="bold">Population:</span> {item.population}
									</div>
									<div className="card__info">
										<span class="bold">Region:</span> {item.region} 
									</div>
									<div className="card__info">
										<span class="bold">Capital:</span> {item.capital}
									</div>
								</div>
							);
						})}
					</div>
				</>

		);
	}
}