// import { useState } from 'react';
import "./Technologies.css";

export const Technologies = ({ technologies, subtitle }) => {
	return (
		<div className="technologies-list">
			<h3>{subtitle}</h3>
			{technologies.map((item) => (
				<div key={item.id}>
					<div className="technology">
						<div className="technology-logo">
							<img src={item.logo} alt={`Logo de ${item.name}`} />
						</div>
						<h4>{item.name}</h4>
					</div>
					<p>
						Nivel: <span>{item.level}</span>
					</p>
				</div>
			))}
		</div>
	);
};
