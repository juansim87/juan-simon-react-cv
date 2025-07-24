// import { useState } from 'react';
import "./ContactInfo.css";

export const ContactInfo = ({ info }) => {
	const { location, email, phone } = info;

	return (
		<div className="info-contact">
			<p>Ciudad: {location}</p>
			<p>Teléfono: {phone}</p>
			<p>Email: {email}</p>
		</div>
	);
};
