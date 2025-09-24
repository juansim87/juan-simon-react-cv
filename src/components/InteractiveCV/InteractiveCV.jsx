import React, { useCallback, useMemo, useState } from "react";
import "./InteractiveCV.css";
import { Header } from "../Header/Header";
import { ToggleModeButton } from "../ToggleModeButton/ToggleModeButton";
import { TabNavigation } from "../TabNavigation/TabNavigation";
import { CVSections } from "../CVSections/CVSections";

export const InteractiveCV = React.memo(({ cvData, darkMode }) => {
	const [activeTab, setActiveTab] = useState("all");
	const [animating, setAnimating] = useState(false);
	const [visibleTab, setVisibleTab] = useState("all");
	const [toggleMode, setToggleMode] = useState("viewMode");
	const [isSelected, setIsSelected] = useState([]);

	const { personalInfo } = cvData;

	const tabs = useMemo( ( )=> [
		{ id: "all", label: "📄 CV completo" },
		{ id: "experience", label: "📋 Experiencia" },
		{ id: "education", label: "🎓 Educación" },
		{ id: "it-skills", label: "🖥️ Informática" },
		{ id: "soft-skills", label: "🔧 Soft Skills" },
		{ id: "languages", label: "💬 Idiomas" },
	], []);

	const handleTabChange = useCallback((newTab) => {
		if (newTab === activeTab || animating) return;

		setAnimating(true);

		setTimeout(() => {
			setVisibleTab(newTab);
			setActiveTab(newTab);
			setAnimating(false);
		}, 400);
	}, [activeTab, animating]);

	const handleModeChange = useCallback(() => {
		toggleMode === "viewMode"
			? setToggleMode("selectionMode")
			: setToggleMode("viewMode");
	}, [toggleMode]);

	const handleInputChange = useCallback((id) => {
		setIsSelected((prev) =>
			prev.includes(id)
				? prev.filter((sectionId) => sectionId !== id)
				: [...prev, id]
		);
	}, []);

	return (
		<div className="interactive-cv">
			<Header info={personalInfo} darkMode={darkMode} />
			<div className="tab-nav">
				<ToggleModeButton
					toggleMode={toggleMode}
					handleModeChange={handleModeChange}
				/>
				<TabNavigation
					tabs={tabs}
					toggleMode={toggleMode}
					activeTab={activeTab}
					isSelected={isSelected}
					handleTabChange={handleTabChange}
					handleInputChange={handleInputChange}
				/>
			</div>
			<div className="interactive-content">
				<CVSections
					tabs={tabs}
					mode={toggleMode}
					visibleTab={visibleTab}
					isSelected={isSelected}
					animating={animating}
					cvData={cvData}
				/>
			</div>
		</div>
	);
});
