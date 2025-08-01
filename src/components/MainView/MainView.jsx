import { useState } from "react";
import "./MainView.css";
import { Curriculum } from "../Curriculum/Curriculum";
import { InteractiveCV } from "../InteractiveCV/InteractiveCV";

export const MainView = ({ cvData }) => {
	const [view, setView] = useState("traditional");

	return (
		<div className="main-view">
			<nav className="cv-nav">
				<div
					role="button"
					className={`nav-button ${view === "traditional" ? "active" : ""}`}
					onClick={() => setView("traditional")}
				>
					CV Tradicional
				</div>
				<div
					role="button"
					className={`nav-button ${view === "interactive" ? "active" : ""}`}
					onClick={() => setView("interactive")}
				>
					CV Interactivo
				</div>
			</nav>
            <div className="cv-content">
                {view === "traditional" ? (
                    <Curriculum cvData={cvData}/>
                ) : <InteractiveCV cvData={cvData}/>}
            </div>
		</div>
	);
};
