// import { useState } from 'react';
import './ExperienceList.css';

export const ExperienceList = ({experience}) => {

  return (
    <div className='experience-list'>
    {experience.map((item) => (
        <div key={`${item.company}-${item.title}`}>
            <h3>{item.company}</h3>
            <h4>{item.title}</h4>
            <p>{item.location} | {item.startDate} - {item.endDate}</p>
            <p>{item.description}</p>
        </div>
        )
    )}
     
    </div>
  );
};