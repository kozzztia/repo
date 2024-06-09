import {Icon, SearchButton } from '../../components';
import { getText } from '../../utils/getText';

import './index.css';

interface HeaderProps {
  handler: React.Dispatch<React.SetStateAction<boolean>>
}
const Header : React.FC<HeaderProps> = ({handler}) => {
  return (
    <header className="header">
      <nav className="navigation">
        <Icon />
        <h2 className="title">{getText('headerTitle')}</h2>
        <SearchButton handler={handler}/>
      </nav>
    </header>
  )
}

export default Header