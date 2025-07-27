// import { useState } from "react";
import { ContactInfo } from "../ContactInfo/ContactInfo";
import "./Header.css";

export const Header = ({ info }) => {
	const { photo, fullName, title, summary } = info;

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
				<div>
					<p className="item-description">{summary}</p>
				</div>
				<ContactInfo info={info} />
			</div>
		</div>
	);
};
