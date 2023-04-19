import logo from '../../assets/shared/logo.svg'
import { Link } from 'react-router-dom'
import './styled.css'


const Header = () => {
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
                <img src={logo} alt="" className="star" />
                <div className="content">
                    <div className="menu">
                        {nav.map((e) => (
                            <div className="nav">
                                <p style={{ fontWeight: 700 }}>{e.number}</p>
                                <p>{e.page}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header