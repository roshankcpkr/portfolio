import './Footer.css'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import InstagramIcon from '@material-ui/icons/Instagram'
import { about } from '../../portfolio'


const Footer = () => {

  const {social} = about
  return (
<footer className='footer'>
  <div className='footer__social'>
    <a href={social.facebook}
      className='icon link'
      target='_blank'
      aria-label='facebook'
      rel='noopener noreferrer'
    >
      <FacebookIcon />
    </a>
    <a
      href={social.tweet}
      className='icon link'
      target='_blank'
      aria-label='twitter'
      rel='noopener noreferrer'
    >
      <TwitterIcon />
    </a>
    <a
      href={social.instagram}
      className='icon link'
      target='_blank'
      aria-label='instagram'
      rel='noopener noreferrer'
    >
      <InstagramIcon />
    </a>
    </div>
  </footer>
  )
  }

export default Footer
