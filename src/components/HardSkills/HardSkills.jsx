// import { useState } from 'react';
import "./HardSkills.css";

export const HardSkills = ({ subtitle, items }) => {
	return (
		<div className="computer-skills-container">
			<h3>{subtitle}</h3>
			<div className="computer-skills-list">
				{items.map((item) => (
					<div key={item.id} className="skill-item">
						<div className="skill-name">
							<div className="skill-logo">
								<img src={item.logo} alt={`Logo de ${item.name}`} />
							</div>
							<h4>{item.name}</h4>
						</div>
						<p className="skill-level">
							Nivel: <span>{item.level}</span>
						</p>
					</div>
				))}
			</div>
		</div>
	);
};
