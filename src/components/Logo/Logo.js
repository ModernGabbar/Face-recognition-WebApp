import React from 'react';
import Brain from './Brain.png';
import './Logo.css';
import Tilt from 'react-tilt';

const Logo = () => {
	return (
		<div className='ma4 mt0'>
			<Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
				<div className="Tilt-inner pd3">
					<img style={{paddingTop: '25px'}} alt='Logo' src={Brain}/>
				</div>
			</Tilt>
		</div>
	);
}

export default Logo;