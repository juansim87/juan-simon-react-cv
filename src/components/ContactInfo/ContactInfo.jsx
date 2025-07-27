// import { useState } from 'react';
import "./ContactInfo.css";

export const ContactInfo = ({ info }) => {
	const { location, email, phone } = info;

	return (
		<div className="contact-info">
			<p>
				Residencia: <span>{location}</span>
			</p>
			<p>
				Teléfono: <span>{phone}</span>
			</p>
			<p>
				Email: <span>{email}</span>
			</p>
		</div>
	);
};
