import { useState, useContext } from 'react';
import { ThemeContext } from '../App';
import { Modal } from './Modal';
import { checkTheme } from '../utils/Utils';


export const FlagsComponent = (props) => {

	const { data } = props;
	const { theme } = useContext(ThemeContext);
	const [state, setModalState] = useState({visibility: false, country: null});

	const changeModal = (country) => {
		setModalState({visibility : !state.visibility , country});
	}

	if (!data) {
		return (
			<div>Carregando países!</div>
		);
	} else { 
		return (
				<>	
					<Modal country={state.country} 
						visibility={state.visibility}
						change={changeModal}
						aliases={props.aliases}/>
					<div className="flags_container">
						{data.map( item => {
							return (
								<div className={`container__card ${checkTheme(undefined, theme)}`}
									onClick={() => changeModal(item)} key={item.key}
								>
									<div className="card__image" style={{backgroundImage: `url(${item.flags.svg})`}}> 
									</div>
									<h1 className={'card__header'}>
										{item.name.common}
									</h1>
									<div className="card__info">
										<span className="bold">Population:</span> {item.population}
									</div>
									<div className="card__info">
										<span className="bold">Region:</span> {item.region} 
									</div>
									<div className="card__info">
										<span className="bold">Capital:</span> {item.capital}
									</div>
								</div>
							);
						})}
					</div>
				</>

		);
	}
}