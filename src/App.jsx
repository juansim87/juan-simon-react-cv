import { useState } from "react";
import "./App.css";
import { Curriculum } from "./components/Curriculum/Curriculum";
import cvData from "./data/cvData";

export const App = () => {
	const [darkMode, setDarkMode] = useState(false);
	const onToggleDarkMode = () => {
		setDarkMode((prev) => !prev);
	};

	return (
		<div className={darkMode ? "dark-mode" : "light-mode"}>
			<div id="dark-mode-btn" role="button" onClick={onToggleDarkMode} alt= "Cambiar entre modo oscuro y modo claro">
				<img src={darkMode ? "icons/sun.png" : "icons/moon.png"} />
			</div>
			<Curriculum  data={cvData} />
		</div>
	);
};
