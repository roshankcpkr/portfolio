import { useContext } from 'react'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import './About.css'
import { ThemeContext } from '../../contexts/theme'
import roshanlight from './roshan_light.png'
import roshandark from './roshan_dark.png'
import repdf from "./resumeros.pdf"

const About = () => {
  const { name, role, description, resume, social } = about
  const [{ themeName }] = useContext(ThemeContext)
  let roshan = ''
  if (themeName === 'light') {
    roshan = roshanlight
  } else {
    roshan = roshandark
  }
  return (
    <div className='about center'>
      <div className='about__bio'>
        <div className='image-container'>
          <img src={roshan} alt='me' className='about__image' />
        </div>
        <div className='about__right'>
          {name && (
            <h1>
              Hi, I am <span className='about__name'>{name}.</span>
            </h1>
          )}

          {role && <h2 className='about__role'>A {role}.</h2>}
          <p className='about__desc'>{description && description}</p>
        </div>
      </div>

      <div className='about__contact minus-margin center'>
        {resume && (
          <a href={repdf} target='_blank' rel='noopener noreferrer'>
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                target='_blank'
                rel='noopener noreferrer'
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                target='_blank'
                rel='noopener noreferrer'
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
