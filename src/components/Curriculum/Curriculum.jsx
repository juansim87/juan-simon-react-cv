// import { useState } from 'react';
import { Header } from "../Header/Header";
import { Section } from "../Section/Section";
import { ExperienceList } from "../ExperienceList/ExperienceList";
import { EducationList } from "../EducationList/EducationList";
import { DevLanguages } from "../DevLanguages/DevLanguages";
import { Technologies } from "../Technologies/Technologies";
import { SkillList } from "../SkillList/SkillList";
import { LanguageList } from "../LanguageList/LanguageList";
import "./Curriculum.css";

export const Curriculum = ({ cvData }) => {
	const {
		personalInfo,
		experience,
		education,
		softSkills,
		devLanguages,
		technologies,
		languages,
	} = cvData;

	return (
		<div className="curriculum-container">
			<Header info={personalInfo} />
			<div className="sections">
				<Section title={"📋 Experiencia"}>
					<ExperienceList experience={experience} />
				</Section>
				<Section title={"🧑🏻‍🎓 Educación"}>
					<EducationList education={education} />
				</Section>
				<Section title={"🖥️ Competencias informáticas"}>
					<div className="computer-skills">
						<DevLanguages
							devLanguages={devLanguages}
							subtitle={"Lenguajes de desarrollo"}
						/>
						<Technologies
							technologies={technologies}
							subtitle={"Tecnologías"}
						/>
					</div>
				</Section>
				<Section title={"🔧 Soft skills"}>
					<SkillList softSkills={softSkills} />
				</Section>
				<Section title={"💬 Idiomas"}>
					<LanguageList languages={languages} />
				</Section>
			</div>
		</div>
	);
};
