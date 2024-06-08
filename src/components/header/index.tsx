import icon from '../../assets/icon.svg';

import './index.css'
const Header = () => {
  console.log(icon)
  return (
    <header className="header">
      <nav className="navigation">
      <svg className="icon" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg">
        <rect width="96" height="96" rx="48" fill="#FFF50F"></rect>
        <circle cx="48.0026" cy="47.9997" r="34.6667"></circle>
        <circle cx="47.9062" cy="47.9062" r="26.3438" fill="#FFF50F"></circle>

        <circle cx="35.8434" cy="48.0309" r="7.53094" stroke="#FFF50F" strokeWidth="1" fill="#FFF50F" className="lid"></circle>
        <circle cx="60.2262" cy="48.0309" r="7.53094" stroke="#FFF50F" strokeWidth="1" fill="#FFF50F" className="lid"></circle>
        <circle cx="35.8434" cy="48.0309" r="5" className="eye" width="20px"></circle>
        <circle cx="60.2262" cy="48.0309" r="5" className="eye" width="20px"></circle>
      </svg>
        
        Navigation
      </nav>
    </header>
  )
}

export default Header