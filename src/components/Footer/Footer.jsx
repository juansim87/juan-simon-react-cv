// import { useState } from "react";
import "./Footer.css";
import githubLogoDark from "../../assets/icons/github-logo-dark.png";
import githubLogoLight from "../../assets/icons/github-logo-light.png";
import linkedinLogoDark from "../../assets/icons/linkedin-logo-dark.png";
import linkedinLogoLight from "../../assets/icons/linkedin-logo-light.png";
import portfolioLogoDark from "../../assets/icons/juan-simon-logo-dark.png";
import portfolioLogoLight from "../../assets/icons/juan-simon-logo-light.png";

export const Footer = ({ cvData, darkMode }) => {
	const { personalInfo } = cvData;

	const { location, email, linkedin, github, portfolio } = personalInfo;

	return (
		<div className="footer">
			<div className="footer-contact">
				<div className="footer-rrss">
					<div className="rrss-icon tooltip">
						<a href={github} target="_blank" rel="noopener noreferrer">
							<img
								src={darkMode ? githubLogoDark : githubLogoLight}
								alt="Logo de GitHub"
							/>
							<span className="tooltip-text">Ver perfil de GitHub</span>
						</a>
					</div>
					<div className="rrss-icon tooltip">
						<a href={linkedin} target="_blank" rel="noopener noreferrer">
							<img
								src={darkMode ? linkedinLogoDark : linkedinLogoLight}
								alt="Logo de LinkedIn"
							/>
							<span className="tooltip-text">Ver perfil de LinkedIn</span>
						</a>
					</div>
					<div className="rrss-icon tooltip">
						<a href={portfolio} target="_blank" rel="noopener noreferrer">
							<img
								src={darkMode ? portfolioLogoDark : portfolioLogoLight}
								alt="Logo de portfolio de Juan Simón Abad"
							/>
							<span className="tooltip-text">Visitar portfolio personal</span>
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
