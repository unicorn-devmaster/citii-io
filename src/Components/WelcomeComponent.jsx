import React from 'react';
import WelcomeDetailsComponent from './WelcomeDetailsComponent.jsx';
import logo from '../logo.png';
import personal_logo from '../personal_logo.png';
import react_logo from '../logo.svg';

let logo_properties = {
	height: '135px',
	display: 'block',
	margin: '0 auto'
}

let inherit_height = {
	height: 'inherit'
}

let intro = {
	fontFamily: 'Nunito, sans-serif',
	fontSize: '30px',
	textAlign: 'center',
	margin: '5px'
}

let description = {
	color: '#FFF',
	fontFamily: 'Nunito, sans-serif',
	fontSize: '14.5px',
	textAlign: 'center',
	marginTop: 0,
	marginBottom: '25px'
}

let sub_intro = {
	color: '#FFF',
	fontFamily: 'Nunito, sans-serif',
	fontSize: '25px',
	fontWeight: '700',
	textAlign: 'center',
	margin: '5px'
}

let buttons_container = {
	width: '100%',
	textAlign: 'center'
}

let details_button = {
	height: '38px',
    padding: '0 15px',
    textAlign: 'center',
    fontSize: '11px',
    fontWeight: '600',
    lineHeight: '38px',
    letterSpacing: '.1rem',
    textTransform: 'uppercase',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    borderRadius: '4px',
    border: '1px solid #bbb',
    cursor: 'pointer',
    boxSizing: 'border-box',
    display: 'inline-block',
    margin: '0px auto',
    color: '#ea4c88',
    backgroundColor: '#FFF',
    borderColor: '#FFF',
    margin: '0 10px'
}

class WelcomeComponent extends React.Component {

	constructor () {
		super();

		this.state = { openDetails: false};

		this.openDetails = this.openDetails.bind(this);
		this.closeDetails = this.closeDetails.bind(this);
	}

	openDetails () {
		this.setState({	
			openDetails: true 
		});
	}

	closeDetails () {
		this.setState({
			openDetails: false
		});
	}

	render () {
		return (
			<div style={inherit_height}>
			{(!this.state.openDetails) && <div className="aligner">
				<div>
					<div className='welcome-block'>
						<img src={logo} style={logo_properties} />
						<h3 style={sub_intro}>The Cost Of Living App</h3>
						<p style={description}> Have you ever thought how far your current cost of living will go in another city?
						This simple app, built with React, will calculate how much more (or less) you would need
						to maintain the same standard of living in another city!
						</p>
						<div style={buttons_container}>
						<button style={details_button} onClick={this.openDetails}>Details</button>
						<button className='continue-button' onClick={this.props.nextStep}>Continue</button>
						</div>
					</div>
				</div>
			<div className="footer">
				<div className='footer-description1'><span className='footer-name-text'>HD</span> © 2017</div>
				<div className='footer-description2'>Built with <a href="https://facebook.github.io/react/" 
				target="_blank" className="footer-link-description">React</a> <img src={react_logo} className='footer-logo'/></div>
				<div className='footer-social-media'>
					<a href="http://hassandjirdeh.com" target="_blank" className="social_links">
				        <i id="social-link" className="fa fa-h-square fa-2x social" aria-hidden="true"></i>
				    </a>
					<a href="https://ca.linkedin.com/in/hassandjirdeh" target="_blank" className="social_links">
				        <i id="social-link" className="fa fa-linkedin-square fa-2x social" aria-hidden="true"></i>
				     </a>
				    <a href="mailto:hassan.djirdeh@mail.utoronto.ca" target="_blank" className="social_links">
				    	<i id="social-em" className="fa fa-envelope-square fa-2x social"></i>
				    </a>
				</div>
			</div>
			</div>}
			{(this.state.openDetails) && <WelcomeDetailsComponent closeDetails={this.closeDetails}/>}
			</div>	
		);
	}
}

export default WelcomeComponent;