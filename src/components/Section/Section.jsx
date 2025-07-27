// import { useState } from 'react';
import "./Section.css";

export const Section = ({ title, children }) => {
	return (
		<div className="section">
			<div className="separator"></div>
			<div className= "items-list">
				<h2>{title}</h2>
				{children}
			</div>
		</div>
	);
};
