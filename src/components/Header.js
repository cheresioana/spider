import React from 'react';
import '../css/header.css';

class Header extends React.Component {
	render(){
		return(
			<div className="header-background">
				<div className="header-buttons">
					<div className="stretch">About us</div>
					<div className="stretch">Pricing</div>
					<div className="stretch">Contact</div>
				</div>
			</div>
			)
	}
}

export default Header;