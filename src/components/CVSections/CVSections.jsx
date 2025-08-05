// import { useState } from 'react';
import "./CVSections.css";
import { ExperienceList } from "../ExperienceList/ExperienceList";
import { EducationList } from "../EducationList/EducationList";
import { SkillList } from "../SkillList/SkillList";
import { LanguageList } from "../LanguageList/LanguageList";
import { DownloadButton } from "../DownloadButton/DownloadButton";
import { HardSkills } from "../HardSkills/HardSkills";
import { Section } from "../Section/Section";

export const CVSections = ({
	tabs,
	mode,
	visibleTab,
	isSelected,
	animating,
	cvData,
}) => {
	const {
		experience,
		education,
		devLanguages,
		technologies,
		softSkills,
		languages,
	} = cvData;

	const renderSection = (id, title, content) => (
		<Section
			key={id}
			title={title}
			className={animating ? "scroll-collapse" : "scroll-expand"}
		>
			{content}
		</Section>
	);

	if (mode === "selectionMode") {
		if (isSelected.length === 0) {
			return (
				<p className="selection-warning">
					Selecciona las secciones que quieras ver
				</p>
			);
		}
		return (
			<>
				{isSelected.includes("experience") &&
					renderSection(
						"experience",
						"📋 Experiencia",
						<ExperienceList experience={experience} />
					)}
				{isSelected.includes("education") &&
					renderSection(
						"education",
						"🎓 Educación",
						<EducationList education={education} />
					)}
				{isSelected.includes("it-skills") &&
					renderSection(
						"it-skills",
						"🖥️ Competencias informáticas",
						<div className="computer-skills">
							<HardSkills
								subtitle="Lenguajes de desarrollo"
								items={devLanguages}
							/>
							<HardSkills subtitle="Tecnologías" items={technologies} />
						</div>
					)}
				{isSelected.includes("soft-skills") &&
					renderSection(
						"soft-skills",
						"🔧 Soft Skills",
						<SkillList softSkills={softSkills} />
					)}
				{isSelected.includes("languages") &&
					renderSection(
						"languages",
						"💬 Idiomas",
						<LanguageList languages={languages} />
					)}
				<DownloadButton />
			</>
		);
	}

	if (visibleTab === "all") {
		return (
			<>
				{renderSection(
					"experience",
					"📋 Experiencia",
					<ExperienceList experience={experience} />
				)}
				{renderSection(
					"education",
					"🎓 Educación",
					<EducationList education={education} />
				)}
				{renderSection(
					"it-skills",
					"🖥️ Competencias informáticas",
					<div className="computer-skills">
						<HardSkills
							subtitle="Lenguajes de desarrollo"
							items={devLanguages}
						/>
						<HardSkills subtitle="Tecnologías" items={technologies} />
					</div>
				)}
				{renderSection(
					"soft-skills",
					"🔧 Soft Skills",
					<SkillList softSkills={softSkills} />
				)}
				{renderSection(
					"languages",
					"💬 Idiomas",
					<LanguageList languages={languages} />
				)}
				<DownloadButton />
			</>
		);
	}

	// Si es una sola pestaña
	return renderSection(
		visibleTab,
		tabs.find((t) => t.id === visibleTab)?.label || "",
		visibleTab === "experience" ? (
			<ExperienceList experience={experience} />
		) : visibleTab === "education" ? (
			<EducationList education={education} />
		) : visibleTab === "it-skills" ? (
			<div className="computer-skills">
				<HardSkills subtitle="Lenguajes de desarrollo" items={devLanguages} />
				<HardSkills subtitle="Tecnologías" items={technologies} />
			</div>
		) : visibleTab === "soft-skills" ? (
			<SkillList softSkills={softSkills} />
		) : visibleTab === "languages" ? (
			<LanguageList languages={languages} />
		) : null
	);
};
