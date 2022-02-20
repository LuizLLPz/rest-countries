import { useState, useContext } from 'react';
import { ThemeContext } from '../App.js'
import '../css/modalStyles.css'


export const Modal = (props) => {
	const { theme } = useContext(ThemeContext);
	const [visibility, setVisibility] = useState('hidden');
	return (
		<div className={`country_modal country_modal--${theme =='light' ? 'light' : 'dark'}`}>

		</div>
	);
}