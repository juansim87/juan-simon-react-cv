import { useState } from "react";
import "./InteractiveCV.css";
import { Header } from "../Header/Header";
import { Section } from "../Section/Section";
import { ExperienceList } from "../ExperienceList/ExperienceList";
import { EducationList } from "../EducationList/EducationList";
import { SkillList } from "../SkillList/SkillList";
import { LanguageList } from "../LanguageList/LanguageList";
import { HardSkills } from "../HardSkills/HardSkills";

export const InteractiveCV = ({ cvData }) => {
	const {
		personalInfo,
		experience,
		education,
		softSkills,
		devLanguages,
		technologies,
		languages,
	} = cvData;

	const [activeTab, setActiveTab] = useState("experience");

	const tabs = [
		{ id: "experience", label: "📋 Experiencia" },
		{ id: "education", label: "🎓 Educación" },
		{ id: "it-skills", label: "🖥️ Competencias informáticas" },
		{ id: "soft-skills", label: "🔧 Soft Skills" },
		{ id: "languages", label: "💬 Idiomas" },
	];

	const currentTab = tabs.find((tab) => tab.id === activeTab);

	console.log(currentTab);

	return (
		<div className="interactive-cv">
			<Header info={personalInfo} />
			<div className="tab-nav">
				{tabs.map((item) => (
					<div
						key={item.id}
						className={`tab ${activeTab === item.id ? "active-tab" : ""}`}
						onClick={() => setActiveTab(item.id)}
						role="button"
					>
						<p>{item.label}</p>
					</div>
				))}
			</div>
			<div className="interactive-content">
				{currentTab && (
					<Section title={currentTab.label}>
						{activeTab === "experience" && (
							<ExperienceList experience={experience} />
						)}
						{activeTab === "education" && (
							<EducationList education={education} />
						)}
						{activeTab === "it-skills" && (
							<div className="computer-skills">
								<HardSkills
									subtitle="Lenguajes de desarrollo"
									items={devLanguages}
								/>
								<HardSkills subtitle="Tecnologías" items={technologies} />
							</div>
						)}
						{activeTab === "soft-skills" && (
							<SkillList softSkills={softSkills} />
						)}
						{activeTab === "languages" && (
							<LanguageList languages={languages} />
						)}
					</Section>
				)}
			</div>
		</div>
	);
};
