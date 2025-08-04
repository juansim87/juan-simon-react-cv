// import { useState } from 'react';
import "./Curriculum.css";
import { Header } from "../Header/Header";
import { Section } from "../Section/Section";
import { ExperienceList } from "../ExperienceList/ExperienceList";
import { EducationList } from "../EducationList/EducationList";
import { SkillList } from "../SkillList/SkillList";
import { LanguageList } from "../LanguageList/LanguageList";
import { HardSkills } from "../HardSkills/HardSkills";
import { DownloadButton } from "../DownloadButton/DownloadButton";

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
				<Section title={"🖥️ Informática"}>
					<div className="computer-skills">
						<HardSkills
							subtitle="Lenguajes de desarrollo"
							items={devLanguages}
						/>
						<HardSkills subtitle="Tecnologías" items={technologies} />
					</div>
				</Section>
				<Section title={"🔧 Soft skills"}>
					<SkillList softSkills={softSkills} />
				</Section>
				<Section title={"💬 Idiomas"}>
					<LanguageList languages={languages} />
				</Section>
			</div>
			<DownloadButton/>
		</div>
	);
};
