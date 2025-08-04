import { useState } from "react";
import "./InteractiveCV.css";
import { Header } from "../Header/Header";
import { Section } from "../Section/Section";
import { ExperienceList } from "../ExperienceList/ExperienceList";
import { EducationList } from "../EducationList/EducationList";
import { SkillList } from "../SkillList/SkillList";
import { LanguageList } from "../LanguageList/LanguageList";
import { HardSkills } from "../HardSkills/HardSkills";
import { DownloadButton } from "../DownloadButton/DownloadButton";
import { ToggleModeButton } from "../ToggleModeButton/ToggleModeButton";

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
	const [toggleMode, setToggleMode] = useState("viewMode");
	const [isSelected, setIsSelected] = useState([]);

	const tabs = [
		{ id: "all", label: "📄 CV completo" },
		{ id: "experience", label: "📋 Experiencia" },
		{ id: "education", label: "🎓 Educación" },
		{ id: "it-skills", label: "🖥️ Informática" },
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

	const handleModeChange = () => {
		toggleMode === "viewMode"
			? setToggleMode("selectionMode")
			: setToggleMode("viewMode");
	};

	const handleInputChange = (id) => {
		setIsSelected((prev) =>
			prev.includes(id)
				? prev.filter((sectionId) => sectionId !== id)
				: [...prev, id]
		);
	};

	return (
		<div className="interactive-cv">
			<Header info={personalInfo} />
			<div className="tab-nav">
				<ToggleModeButton
					toggleMode={toggleMode}
					handleModeChange={handleModeChange}
				/>
				{toggleMode === "viewMode" ? (
					<div className="tabs-box">
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
				) : (
					<div className="tabs-box">
						{tabs
							.filter((item) => item.id !== "all")
							.map((item) => (
								<label key={item.id} className="checkbox" htmlFor={item.id}>
									<input
										id={item.id}
										type="checkbox"
										checked={isSelected.includes(item.id)}
										onChange={() => handleInputChange(item.id)}
									/>
									{item.label}
								</label>
							))}
					</div>
				)}
			</div>
			<div className="interactive-content">
				{toggleMode === "selectionMode" ? (
					isSelected.length > 0 ? (
						<>
							{isSelected.includes("experience") && (
								<Section
									title="📋 Experiencia"
									className={animating ? "scroll-collapse" : "scroll-expand"}
								>
									<ExperienceList experience={experience} />
								</Section>
							)}

							{isSelected.includes("education") && (
								<Section
									title="🎓 Educación"
									className={animating ? "scroll-collapse" : "scroll-expand"}
								>
									<EducationList education={education} />
								</Section>
							)}

							{isSelected.includes("it-skills") && (
								<Section
									title="🖥️ Competencias informáticas"
									className={animating ? "scroll-collapse" : "scroll-expand"}
								>
									<div className="computer-skills">
										<HardSkills
											subtitle="Lenguajes de desarrollo"
											items={devLanguages}
										/>
										<HardSkills subtitle="Tecnologías" items={technologies} />
									</div>
								</Section>
							)}

							{isSelected.includes("soft-skills") && (
								<Section
									title="🔧 Soft Skills"
									className={animating ? "scroll-collapse" : "scroll-expand"}
								>
									<SkillList softSkills={softSkills} />
								</Section>
							)}

							{isSelected.includes("languages") && (
								<Section
									title="💬 Idiomas"
									className={animating ? "scroll-collapse" : "scroll-expand"}
								>
									<LanguageList languages={languages} />
								</Section>
							)}
							<DownloadButton />
						</>
					) : (
						<div className="selection-warning">
							<p>Selecciona las secciones que quieras ver</p>
						</div>
					)
				) : visibleTab === "all" ? (
					<>
						<Section
							title="📋 Experiencia"
							className={animating ? "scroll-collapse" : "scroll-expand"}
						>
							<ExperienceList experience={experience} />
						</Section>

						<Section
							title="🎓 Educación"
							className={animating ? "scroll-collapse" : "scroll-expand"}
						>
							<EducationList education={education} />
						</Section>

						<Section
							title="🖥️ Competencias informáticas"
							className={animating ? "scroll-collapse" : "scroll-expand"}
						>
							<div className="computer-skills">
								<HardSkills
									subtitle="Lenguajes de desarrollo"
									items={devLanguages}
								/>
								<HardSkills subtitle="Tecnologías" items={technologies} />
							</div>
						</Section>

						<Section
							title="🔧 Soft Skills"
							className={animating ? "scroll-collapse" : "scroll-expand"}
						>
							<SkillList softSkills={softSkills} />
						</Section>

						<Section
							title="💬 Idiomas"
							className={animating ? "scroll-collapse" : "scroll-expand"}
						>
							<LanguageList languages={languages} />
						</Section>
						<DownloadButton />
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
