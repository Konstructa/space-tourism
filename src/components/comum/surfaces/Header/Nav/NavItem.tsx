import { useContext } from 'react';
import BackgroundContext from '../../../../../context/BackgroundContext';
import { NavItem } from './styles';

interface NavItempProps {
  page: string,
  title: string,
  number: string
}

export const NavBarItem = ({  page, title, number }: NavItempProps) => {
  const { changeBackgroundImage } = useContext(BackgroundContext)
  const path = page == 'home' ? '/' : `/${page}` 

  return (
    <NavItem
        to={path}
        style={({ isActive }) =>
            ({ borderBottom: isActive ? '2px solid rgba(255, 255, 255)' : "" })}
        className="header-nav"
        onClick={() => changeBackgroundImage(title)}
    >
      <p> <span>{number}</span> {  } {title}</p>
  </NavItem>

  )
}
