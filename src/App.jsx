import React from 'react'
import './App.css'
import Section1 from './section1/Section1'

const App = () => {

  return (
    <div className='main-section-layout'>
      <div className='main-section-1'><Section1 /></div>
      <div className='main-section-2'>Section 2</div>
    </div>
  )
}

export default App
