// import { useState } from 'react';
import { EducationList } from "../EducationList/EducationList";
import { ExperienceList } from "../ExperienceList/ExperienceList";
import { Header } from "../Header/Header";
import { Section } from "../Section/Section";
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
			<Section title={"Experiencia"}>
				<ExperienceList experience={experience} />
			</Section>
			<Section title={"Educación"}>
				<EducationList education={education} />
			</Section>
			<Section title={"Habilidades"}></Section>
			<Section title={"Idiomas"}></Section>
		</div>
	);
};
