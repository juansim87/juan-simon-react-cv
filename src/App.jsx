// import { useState } from 'react'
import './App.css'
import { Curriculum } from './components/Curriculum/Curriculum'
import cvData from './data/cvData'

export const App = () => {
  

  return (
    <>
      <Curriculum data={cvData}/>
    </>
  )
}