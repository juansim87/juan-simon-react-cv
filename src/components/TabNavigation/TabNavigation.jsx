// import { useState } from 'react';
import "./TabNavigation.css";

export const TabNavigation = ({
	tabs,
	toggleMode,
	activeTab,
	isSelected,
	handleTabChange,
	handleInputChange,
}) => {
	return (
		<div className="tabs-box">
			{toggleMode === "viewMode"
				? tabs.map((item) => (
						<div
							key={item.id}
							className={`tab ${activeTab === item.id ? "active-tab" : ""}`}
							onClick={() => handleTabChange(item.id)}
							role="button"
						>
							<p>{item.label}</p>
						</div>
				  ))
				: tabs
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
	);
};
