import React from 'react';

export default class Header extends React.Component{
	render(){
		return (
			<div className="header">
				<img className="headerLogo" src="js/public/logo.jpg" alt="logo"/>
				<div className="headerMenu">
					<div className="bar"></div>
					<div className="bar"></div>
					<div className="bar"></div>
				</div>
				<div className="headerLogin"> 
					LOGIN 
				</div>
				<div className="phone">
					212.555.5555
				</div>
				
			</div>
			)
	}
}