// import { useState } from 'react';
import "./DevLanguages.css";

export const DevLanguages = ({ devLanguages, subtitle }) => {
	return (
		<div className="computer-skills-container">
			<h3>{subtitle}</h3>
			<div className="computer-skills-list">

			{devLanguages.map((item) => (
				<div key={item.id}>
					<div className="dev-language">
						<div className="dev-language-logo">
							<img src={item.logo} alt={`Logo de ${item.name}`} />
						</div>
						<h4>{item.name}</h4>
					</div>
					<p className="dev-language-level">
						Nivel: <span>{item.level}</span>
					</p>
				</div>
			))}
			</div>
		</div>
	);
};
