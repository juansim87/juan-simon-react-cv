// import { useState } from 'react';
import "./EducationItem.css";

export const EducationItem = ({ academicItem }) => {
	const { degree, institution, location, startDate, endDate, description } =
		academicItem;

	return (
		<div className="item-container">
			<div className="item-title">
				<h3>{degree}</h3>
				<h4>▪️{institution}</h4>
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
