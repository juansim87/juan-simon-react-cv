// import { useState } from 'react';
import "./Curriculum.css";

export const Curriculum = ({ data }) => {
	const { personalInfo } = data;

	const { photo, fullName, title, location, email, phone, summary } =
		personalInfo;

	return (
		<div className="curriculum-container">
			<div className="header">
				<div className="header-image">
					<img src={photo} alt="" />
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
		</div>
	);
};
