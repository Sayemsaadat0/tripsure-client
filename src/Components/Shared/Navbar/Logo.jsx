import { Link } from 'react-router-dom'
// import logoImg from '../../../assets/images/logo.png'
import logoImg from '../../../assets/icon.png'
const Logo = () => {
  return (
    <Link to='/'>
      <img
        className='hidden md:block  w-full h-28'
        src={logoImg}
        alt='logo'
      />
    </Link>
  )
}

export default Logo