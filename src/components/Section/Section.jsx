// import { useState } from 'react';
import "./Section.css";

export const Section = ({ title }) => {
	return (
		<div className="section">
			<div className="separator"></div>
			<h2>{title}</h2>
		</div>
	);
};
