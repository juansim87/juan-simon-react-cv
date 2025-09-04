// import { useState } from 'react';
import "./LanguageList.css";

export const LanguageList = ({ languages }) => {
	return (
		<div className="language-list">
			{languages.map((item) => (
				<div key={item.id}>
					<span className="language-title">
						<div className="language-flag">
							<img src={item.flag} alt={`Bandera de ${item.countryFlag}`} />
						</div>
						<h3>{item.language}</h3>
					</span>
					<p className="language-level">
						Nivel: <span>{item.level}</span>
					</p>
				</div>
			))}
		</div>
	);
};
