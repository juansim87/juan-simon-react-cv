// import { useState } from "react";
import "./ToggleModeButton.css";

export const ToggleModeButton = ({toggleMode, handleModeChange}) => {
	return (
		<div className="toggle-mode-button" role="button" onClick={() => handleModeChange()}>
			{toggleMode === "viewMode"
				? "Cambiar a Modo Selección"
				: "Cambiar a Modo Visualización"}
		</div>
	);
};
