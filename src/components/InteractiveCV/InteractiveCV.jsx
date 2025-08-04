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

	const [activeTab, setActiveTab] = useState("all");
	const [animating, setAnimating] = useState(false);
	const [visibleTab, setVisibleTab] = useState("all");
	const tabs = [
		{ id: "all", label: "📄 CV completo" },
		{ id: "experience", label: "📋 Experiencia" },
		{ id: "education", label: "🎓 Educación" },
		{ id: "it-skills", label: "🖥️ Competencias informáticas" },
		{ id: "soft-skills", label: "🔧 Soft Skills" },
		{ id: "languages", label: "💬 Idiomas" },
	];

	const handleTabChange = (newTab) => {
		if (newTab === activeTab || animating) return;

		setAnimating(true);

		setTimeout(() => {
			setVisibleTab(newTab);
			setActiveTab(newTab);
			setAnimating(false);
		}, 400);
	};

	const currentTab = tabs.find((tab) => tab.id === visibleTab);
	return (
		<div className="interactive-cv">
			<Header info={personalInfo} />
			<div className="tab-nav">
				{tabs.map((item) => (
					<div
						key={item.id}
						className={`tab ${activeTab === item.id ? "active-tab" : ""}`}
						onClick={() => handleTabChange(item.id)}
						role="button"
					>
						<p>{item.label}</p>
					</div>
				))}
			</div>
			<div className="interactive-content">
				{visibleTab === "all" ? (
					<>
						<Section title="📋 Experiencia">
							<ExperienceList experience={experience} />
						</Section>
						<Section title="🎓 Educación">
							<EducationList education={education} />
						</Section>
						<Section title="🖥️ Competencias informáticas">
							<div className="computer-skills">
								<HardSkills
									subtitle="Lenguajes de desarrollo"
									items={devLanguages}
								/>
								<HardSkills subtitle="Tecnologías" items={technologies} />
							</div>
						</Section>
						<Section title="🔧 Soft Skills">
							<SkillList softSkills={softSkills} />
						</Section>
						<Section title="💬 Idiomas">
							<LanguageList languages={languages} />
						</Section>
					</>
				) : (
					currentTab && (
						<Section
							title={currentTab.label}
							className={animating ? "scroll-collapse" : "scroll-expand"}
						>
							{visibleTab === "experience" && (
								<ExperienceList experience={experience} />
							)}
							{visibleTab === "education" && (
								<EducationList education={education} />
							)}
							{visibleTab === "it-skills" && (
								<div className="computer-skills">
									<HardSkills
										subtitle="Lenguajes de desarrollo"
										items={devLanguages}
									/>
									<HardSkills subtitle="Tecnologías" items={technologies} />
								</div>
							)}
							{visibleTab === "soft-skills" && (
								<SkillList softSkills={softSkills} />
							)}
							{visibleTab === "languages" && (
								<LanguageList languages={languages} />
							)}
						</Section>
					)
				)}
			</div>
		</div>
	);
};
