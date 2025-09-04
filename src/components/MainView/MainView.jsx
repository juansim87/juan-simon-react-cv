import { useState } from "react";
import "./MainView.css";
import { InteractiveCV } from "../InteractiveCV/InteractiveCV";
import { Footer } from "../Footer/Footer";
import { TraditionalCV } from "../TraditionalCV/TraditionalCV";

export const MainView = ({ cvData, darkMode }) => {
	const [view, setView] = useState("interactive");

	return (
		<div className="main-view">
			<nav className="cv-nav">
				<div
					role="button"
					className={`nav-button ${view === "interactive" ? "active" : ""}`}
					onClick={() => setView("interactive")}
				>
					CV Interactivo
				</div>
				<div
					role="button"
					className={`nav-button ${view === "traditional" ? "active" : ""}`}
					onClick={() => setView("traditional")}
				>
					CV Tradicional
				</div>
			</nav>
			<div className="cv-content">
				{view === "traditional" ? (
					<TraditionalCV cvData={cvData} darkMode={darkMode} />
				) : (
					<InteractiveCV cvData={cvData} darkMode={darkMode}/>
				)}
			</div>
			<Footer cvData={cvData} darkMode={darkMode}/>
		</div>
	);
};