// import { useState } from 'react';
import { ExperienceItem } from '../ExperienceItem/ExperienceItem';
import './ExperienceList.css';

export const ExperienceList = ({experience}) => {

  return (
    <div className='experience-list'>
    {experience.map((jobItem) => (
        <ExperienceItem key={jobItem.id} jobItem={jobItem}/>
        )
    )}
     
    </div>
  );
};