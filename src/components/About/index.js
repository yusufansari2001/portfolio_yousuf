import { useEffect, useState } from 'react'
// import resumePdf from './assets/resume.pdf';
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Detail-oriented Computer Science student with strong skills in software development, object-oriented
            programming, and database management.
          </p>
          <p align="LEFT">
            Proficient in C, C++, Java, Python, SQL, and web development
            technologies (HTML, CSS, JavaScript, React.js).
          </p>
          <p>
            Actively seeking roles in software engineering,
            web development, or database administration.
          </p>
        </div>

        <div className="resume-container">
          <h2>My Resume</h2>
          <div className="resume-preview">
            {/* You can either embed your resume as an iframe or display a download link */}
            <iframe 
              src='/documents/MOHAMMED_YOUSUF.pdf'
              width="100%" 
              height="500px"
              title="My Resume"
            ></iframe>
            {/* Alternative: Display a download button */}
            <a 
              href="/documents/MOHAMMED_YOUSUF.pdf"
              download 
              className="flat-button"
            >
              DOWNLOAD RESUME
            </a>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About