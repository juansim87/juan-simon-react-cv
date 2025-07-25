// import { useState } from 'react';
import "./EducationItem.css";

export const EducationItem = ({ academicItem }) => {
	const { degree, institution, location, startDate, endDate, description } =
		academicItem;

	return (
		<div>
			<h3>{degree}</h3>
			<h4>{institution}</h4>
			<p>
				{location} | {startDate} - {endDate}
			</p>
			<p>{description}</p>
		</div>
	);
};
