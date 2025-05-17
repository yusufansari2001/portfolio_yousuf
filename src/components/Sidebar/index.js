import { Link, NavLink } from 'react-router-dom'
import React from 'react'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
  return (
    <div className='nav-bar'>
      <Link className='logo' to='/'>
        <img src={LogoS} alt='logo' />
        <img className='sub-logo' src={LogoSubtitle} alt='Yousuf' />
      </Link>
      <nav>
        <NavLink exact='true' activeclassname='active' to='/'>
          <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
          <span>Home</span>
        </NavLink>
        <NavLink exact='true' activeclassname='active' className='about-link' to='/about'>
          <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
          <span>About</span>
        </NavLink>
        <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact'>
          <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
          <span>Contact</span>
        </NavLink>
      </nav>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/yousuf897/" target='_blank' rel='noreferrer'>
            <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
          </a>
        </li>
        <li>
          <a href="https://github.com/yusufansari2001" target='_blank' rel='noreferrer'>
            <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
