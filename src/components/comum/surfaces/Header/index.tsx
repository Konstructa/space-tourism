import logo from '../../../../assets/shared/logo.svg'
import menu from '../../../../assets/shared/icon-hamburger.svg'
import close from '../../../../assets/shared/icon-close.svg'
import { NavLink } from "react-router-dom";
import './styled.css'
import { useContext, useState } from 'react'
import BackgroundContext from '../../../../context/BackgroundContext';
import { Trace, Logo } from './styles';
import { NavBarItem } from './Nav/NavItem';


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

    const navItem = [
        {
            number: '00',
            page: 'home'
        }, {
            number: '01',
            page: 'destination'
        }, {
            number: '02',
            page: 'crew'
        }, {
            number: '03',
            page: 'technology'
        },
    ]

    return (
        <div>
            <header className="header">
                <Logo src={logo} alt="logo" className="star" />
                <Trace />
                <div className="header-content" id={icon}>
                    <div className={active}>
                        {navItem.map((page, index) => {
                            return <NavBarItem
                                key={index}
                                page={page.page}
                                title={page.page}
                                number={page.number}
                            />
                        })}
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