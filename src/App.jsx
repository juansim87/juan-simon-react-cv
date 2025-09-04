import { useState } from "react";
import "./App.css";
import cvData from "./data/cvData";
import sunIcon from "./assets/icons/sun.png";
import moonIcon from "./assets/icons/moon.png";
import { MainView } from "./components/MainView/MainView";

export const App = () => {
	const [darkMode, setDarkMode] = useState(false);
	const [showMainView, setShowMainView] = useState(false);

	const onToggleDarkMode = () => {
		setDarkMode((prev) => !prev);
	};

	return (
		<div className={darkMode ? "dark-mode" : "light-mode"}>
			<div
				id="dark-mode-btn"
				role="button"
				onClick={onToggleDarkMode}
				aria-label="Cambiar entre modo oscuro y modo claro"
			>
				<img
					src={darkMode ? sunIcon : moonIcon}
					alt="Icono modo claro y modo oscuro"
				/>
			</div>
			{!showMainView ? (
				<div className="welcome-screen">
					<h1>Pero... ¿Quién es Juan Simón?</h1>
					<div
						role="button"
						className="welcome-button"
						onClick={() => setShowMainView(true)}
					>
						<span>¡Conóceme!</span>
					</div>
				</div>
			) : (
				<MainView cvData={cvData} darkMode={darkMode} />
			)}
		</div>
	);
};
