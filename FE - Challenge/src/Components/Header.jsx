import { Link } from 'react-router-dom';
//import BurguerMenu from './BurguerMenu'
import chicksLogo from '../assets/chicks-logo-large.svg'
import arrowNav from '../assets/footer/arrow.svg'
import cartLogo from '../assets/cart.svg'
import userLogo from '../assets/user.svg'
import burguerLogo from '../assets/burguer.svg'
import '../styles/Header.css'

export const Header = () => {
    return<>
        <div className='main-div'>
            <div className="main-div__logo-navbar">
                <div className="logo-container">
                    <Link to="https://chicksgold.com/" target="_blank">
                        <img className='logo-navbar__logo chicksLogo' src={chicksLogo} alt="chicks-logo"/>
                    </Link>
                </div>
                <img className='burguer-logo' src={burguerLogo} alt="burguer" />

                <nav className='logo-navbar__navbar'>
                    <ul className='navbar__list'>
                        <li className='list__child'>CURRENCY <img src={arrowNav} alt="arrow-icon"/></li>
                        <li className='list__child'>ITEMS <img src={arrowNav} alt="arrow-icon"/></li>
                        <li className='list__child'>ACCOUNTS <img src={arrowNav} alt="arrow-icon"/></li>
                        <li className='list__child'>SERVICES <img src={arrowNav} alt="arrow-icon"/></li>
                        <li className='list__child'>SWAP <img src={arrowNav} alt="arrow-icon"/></li>
                        <li className='list__child'>SELL <img src={arrowNav} alt="arrow-icon"/></li>
                    </ul>
                </nav>
            </div>
            <div className="main-div__list-container">
                <ul className='list-container__list'>
                    <li className='list__child-2 usd'>USD</li>
                    <li className='list__child-2 cart'><img className='child-2__cartLogo' src={cartLogo} alt="cart" /><p>Cart</p></li>
                    <li className='list__child-2'>
                        <Link to="https://user.chicksgroup.com/?redirect=https%3A%2F%2Fchicksgold.com%2F&nonce=7yX8iawYezqpCjOin22BqkCzT4o5Fz&codeChallenge=Z1oPbUYg8wA2C74h1RQrLGG0NEcot_yTjGsCmC2VWDU&clientId=3a6a1d123b4b45a5ab4d7d097fd900df" 
                            className='sign-button' target="_blank">
                                <div className="link-content">
                                        Sign in
                                    <img className="user-logo" src={userLogo} alt="user"/> 
                                </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </>
}