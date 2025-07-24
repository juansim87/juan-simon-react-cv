// import { useState } from 'react';
import './ExperienceItem.css';

export const ExperienceItem = ({jobItem}) => {

    const {company, title, location, startDate, endDate, description} = jobItem;

  return (
    <div>
            <h3>{company}</h3>
            <h4>{title}</h4>
            <p>{location} | {startDate} - {endDate}</p>
            <p>{description}</p>
        </div>
  );
};