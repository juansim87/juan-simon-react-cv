// import { useState } from 'react';
import "./ExperienceItem.css";

export const ExperienceItem = ({ jobItem }) => {
	const { company, title, location, startDate, endDate, description } = jobItem;

	return (
		<div className="item-container">
			<div className="item-title">
				<h3>{company}</h3>
				<h4>▪️{title}</h4>
			</div>
			<div className="item-info">
				<p>
					{location} | {startDate} - {endDate}
				</p>
				<p className="item-description">{description}</p>
			</div>
		</div>
	);
};
