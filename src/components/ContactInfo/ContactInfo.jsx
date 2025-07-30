// import { useState } from 'react';
import "./ContactInfo.css";
import githubLogo from "../../assets/icons/github-logo.png"
import linkedinLogo from "../../assets/icons/linkedin-logo.png"

export const ContactInfo = ({ info }) => {
	const { location, email, linkedin, github } = info;

	return (
		<div className="contact-info">
			<p>
				Residencia: <span>{location}</span>
			</p>
			<p>
				Email: <span>{email}</span>
			</p>
			<div className="rrss">
				<div className="rrss-icon"><a href={github}><img src={githubLogo}/></a></div>
				<div className="rrss-icon"><a href={linkedin}><img src={linkedinLogo}/></a></div>
			</div>
		</div>
	);
};
