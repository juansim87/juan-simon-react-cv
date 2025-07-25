// import { useState } from 'react';
import { DevLanguages } from "../DevLanguages/DevLanguages";
import { EducationList } from "../EducationList/EducationList";
import { ExperienceList } from "../ExperienceList/ExperienceList";
import { Header } from "../Header/Header";
import { LanguageList } from "../LanguageList/LanguageList";
import { Section } from "../Section/Section";
import { SkillList } from "../SkillList/SkillList";
import { Technologies } from "../Technologies/Technologies";
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
			<Section title={"📋Experiencia"}>
				<ExperienceList experience={experience} />
			</Section>
			<Section title={"🧑🏻‍🎓 Educación"}>
				<EducationList education={education} />
			</Section>
			<Section title={"🖥️ Competencias informáticas"}>
				<DevLanguages
					devLanguages={devLanguages}
					subtitle={"Lenguajes de desarrollo"}
				/>
				<Technologies technologies={technologies} subtitle={"Tecnologías"} />
			</Section>
			<Section title={"🔧 Soft skills"}>
				<SkillList softSkills={softSkills} />
			</Section>
			<Section title={"💬 Idiomas"}>
				<LanguageList languages={languages} />
			</Section>
		</div>
	);
};
