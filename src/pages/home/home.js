import React from 'react'
import About from './components/About';
import Education from './components/Education';
import IntroTop from './components/IntroTop';
import './home.scss';

function Home() {
  return (
    <div className='wrapper'>
      <IntroTop />
      <About />
      <Education />
    </div>
  )
}

export default Home