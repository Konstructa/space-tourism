import logo from '../../assets/shared/logo.svg'
import menu from '../../assets/shared/icon-hamburger.svg'
import close from '../../assets/shared/icon-close.svg'
import { Link } from 'react-router-dom'
import './styled.css'
import { useState } from 'react'


const Header = () => {

    const [active, setActive] = useState('menu');
    const [icon, setIcon] = useState('');
    
    const navToggle = () => {
        active === 'menu' ? setActive('menu menu_active') : setActive('menu')

        icon === '' ? setIcon('active') : setIcon('');
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
            <div className="header">
                <img src={logo} alt="logo" className="star" />
                <div className="header-trace"></div>
                <div className="header-content" id={icon}>
                    <div className={active}>
                        {nav.map((e) => (
                            <div className="header-nav">
                                <p className='p-number'>{e.number}</p>
                                <p>{e.page}</p>
                            </div>
                        ))}
                    </div>
                    <img src={menu} onClick={navToggle} alt="menu-hamburger" className='menu-mobile' />
                    <img src={close} onClick={navToggle} alt="menu-close" className='menu-close' />
                </div>
            </div>
        </div>
    )
}

export default Header