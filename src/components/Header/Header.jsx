// import { useState } from "react";
import "./Header.css";

export const Header = ({info}) => {
	const { photo, fullName, title, location, email, phone, summary } = info;

	return (
		<div className="header">
			<div className="header-image">
				<img src={photo} alt="Foto de perfil de Juan Simón Abad" />
			</div>
			<div className="header-info">
				<div className="info-title">
					<h1>{fullName}</h1>
					<h2>{title}</h2>
				</div>
				<div className="info-contact">
					<p>Ciudad: {location}</p>
					<p>Teléfono: {phone}</p>
					<p>Email: {email}</p>
					<div>
						<p className="info-summary">{summary}</p>
					</div>
				</div>
			</div>
		</div>
	);
};
