import "./DownloadButton.css";

export const DownloadButton = () => {
	const handleClick = () => {
		window.print();
	};

	return (
		<>
			<div
				role="button"
				tabIndex="0"
				onClick={handleClick}
				onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && handleClick()}
				className="download-btn"
			>
				<span>📄 Descargar en PDF</span>
			</div>
		</>
	);
};
