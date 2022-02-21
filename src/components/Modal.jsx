import { useContext } from 'react';
import { ThemeContext } from '../App.js'
import {Header } from './Header';
import '../css/modal_styles.css'


export const Modal = (props) => {
	const { theme } = useContext(ThemeContext);
	const {country, visibility, change} = props;
	return (
		<div className={`modal app--${theme =='light' ? 'light' : 'dark'}`}
		style={{visibility : visibility ? 'visible' : 'hidden'}}
		>
		<Header/>
		<div className="modal__container">
			<div className={`modal__goBack container--${theme =='light' ? 'light' : 'dark'}`} onClick={change}>
				 {`<- Back`}
			</div>
		</div>
		</div>
	);
}