import logo from '../../assets/shared/logo.svg'
import menu from '../../assets/shared/icon-hamburger.svg'
import close from '../../assets/shared/icon-close.svg'
import { NavLink } from "react-router-dom";
import './styled.css'
import { useContext, useState } from 'react'
import BackgroundContext from '../../context/BackgroundContext';


const Header = () => {
    const { changeBackgroundImage } = useContext(BackgroundContext)
    const [active, setActive] = useState('menu');
    const [icon, setIcon] = useState('');
    const [open, setOpen] = useState(false);

    
    const navToggle = () => {
        active === 'menu' ? setActive('menu menu_active') : setActive('menu')

        icon === '' ? setIcon('active') : setIcon('');

        setOpen(current => !current)
    }

    const nav = [
        {
            number: '00',
            page: 'HOME'
        }, {
            number: '01',
            page: 'DESTINATION'
        }, {
            number: '02',
            page: 'CREW'
        }, {
            number: '03',
            page: 'TECHNOLOGY'
        },
    ]

    return (
        <div>
            <header className="header">
                <img src={logo} alt="logo" className="star" />
                <div className="header-trace"></div>
                <div className="header-content" id={icon}>
                    <div className={active}>
                        <NavLink 
                        to = '/' 
                        style={({ isActive }) => 
                        ({ borderBottom: isActive ? '2px solid rgba(255, 255, 255)' : ""})}
                        className="header-nav"
                        onClick={() => changeBackgroundImage('home')}
                        >
                            <p className='p-number'>{nav[0].number}</p>
                            <p>{nav[0].page}</p>
                        </NavLink>
                        <NavLink 
                        to = '/destination' 
                        style={({ isActive }) => 
                        ({ borderBottom: isActive ? '2px solid rgba(255, 255, 255)' : ""})}
                        className="header-nav"
                        onClick={() => changeBackgroundImage('destination')}
                        >
                            <p className='p-number'>{nav[1].number}</p>
                            <p>{nav[1].page}</p>
                        </NavLink>
                        <NavLink 
                        to = '/crew' 
                        style={({ isActive }) => 
                        ({ borderBottom: isActive ? '2px solid rgba(255, 255, 255)' : "" })}
                        className="header-nav"
                        onClick={() => changeBackgroundImage('crew')}
                        >
                            <p className='p-number'>{nav[2].number}</p>
                            <p>{nav[2].page}</p>
                        </NavLink>
                        <NavLink 
                        to = '/technology' 
                        style={({ isActive }) => 
                        ({ borderBottom: isActive ? '2px solid rgba(255, 255, 255)' : "" })}
                        className="header-nav"
                        onClick={() => changeBackgroundImage('technology')}
                        >
                            <p className='p-number'>{nav[3].number}</p>
                            <p>{nav[3].page}</p>
                        </NavLink>
                    </div>

                    {!open ? 
                    <img src={menu} onClick={navToggle} alt="menu-hamburger" className='menu-mobile' /> 
                    :
                    <img src={close} onClick={navToggle} alt="menu-close" className='menu-close' />
                    }
                    
                </div>
            </header>
        </div>
    )
}

export default Header