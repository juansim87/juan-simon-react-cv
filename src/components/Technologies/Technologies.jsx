// import { useState } from 'react';
import "./Technologies.css";

export const Technologies = ({ technologies, subtitle }) => {
	return (
		<div className="computer-skills-container">
			<h3>{subtitle}</h3>
			<div className="computer-skills-list">
				{technologies.map((item) => (
					<div key={item.id} className="skill-item">
						<div className="technology-name">
							<div className="technology-logo">
								<img src={item.logo} alt={`Logo de ${item.name}`} />
							</div>
							<h4>{item.name}</h4>
						</div>
						<p className="technology-level">
							Nivel: <span>{item.level}</span>
						</p>
					</div>
				))}
			</div>
		</div>
	);
};
