// import { useState } from 'react';
import { EducationItem } from '../EducationItem/EducationItem';
import './EducationList.css';

export const EducationList = ({education}) => {

  return (
    <div className='education-list'>
      {education.map((academicItem) => (
        <EducationItem key={academicItem.id} academicItem={academicItem}/>
      ))}
    </div>
  );
};