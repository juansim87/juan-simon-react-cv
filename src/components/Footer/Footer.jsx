// import { useState } from "react";
import "./Footer.css";
import githubLogo from "../../assets/icons/github-logo.png";
import linkedinLogo from "../../assets/icons/linkedin-logo.png";
import portfolioLogo from "../../assets/images/juan-simon-logo.png";

export const Footer = ({ cvData }) => {
	const { personalInfo } = cvData;

	const { location, email, linkedin, github, portfolio } = personalInfo;

	return (
		<div className="footer">
			<button onClick={() => window.print()} className="download-btn">
				📄 Descargar en PDF
			</button>
			<div className="footer-contact">
				<div className="footer-rrss">
					<div className="rrss-icon">
						<a href={github}>
							<img src={githubLogo} />
						</a>
					</div>
					<div className="rrss-icon">
						<a href={linkedin}>
							<img src={linkedinLogo} />
						</a>
					</div>
					<div className="rrss-icon">
						<a href={portfolio}>
							<img src={portfolioLogo} />
						</a>
					</div>
				</div>
				<div className="footer-info">
					<p>
						📍<span>{location}</span> | 📧<span> {email}</span>
					</p>
				</div>
			</div>
			<div className="footer-authory">
				<p>© {new Date().getFullYear()} Juan Simón Abad</p>
				<p>
					Este CV ha sido desarrollado con React y CSS. Última actualización:
					agosto 2025.
				</p>
			</div>
		</div>
	);
};
