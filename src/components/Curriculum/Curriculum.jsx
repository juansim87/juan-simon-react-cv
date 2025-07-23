// import { useState } from 'react';
import { Header } from "../Header/Header";
import "./Curriculum.css";

export const Curriculum = ({ data }) => {
	const {
		personalInfo,
		experience,
		education,
		softSkills,
		devLanguages,
		technologies,
		languages,
	} = data;

	return (
		<div className="curriculum-container">
			<Header info={personalInfo} />
		</div>
	);
};
