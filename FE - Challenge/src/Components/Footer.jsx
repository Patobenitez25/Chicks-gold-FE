import visa from '../assets/footer/visa.svg'
import mastercard from '../assets/footer/mastercard-logo.svg'
import americanExpress from '../assets/footer/americanExpress-logo-.svg'
import skrill from '../assets/footer/Skrill_logo.svg'
import chicksLogo from '../assets/chicks-logo-large.svg'
import greenbitcoin from '../assets/footer/green-bitcoin.svg'
import litecoin from '../assets/footer/litecoin-ltc-logo.svg'
import bitcoin from '../assets/footer/bitcoin-logo.svg'
import ethereum from '../assets/footer/ethereum-eth-logo.svg'
import star from '../assets/footer/star_full.svg'
import facebook from '../assets/footer/facebook.svg'
import instagram from '../assets/footer/instagram.svg'
import discord from '../assets/footer/discord.svg'
import twitter from '../assets/footer/twitter.svg'
import arrow from '../assets/footer/arrow.svg'
import '../styles/Footer.css'
import { Link } from 'react-router'

export const Footer = () => {
    return<>
        <div className='footer-container'>
            <section className='footer-container__list'>
                <div className="list__payments">
                    <img className='visa' src={visa}/>
                    <img className="mastercard" src={mastercard}/>
                    <img className="americanExpress"src={americanExpress}/>
                    <img className="skrill" src={skrill}/>
                    <img className="cryptos"src={greenbitcoin}/>
                    <img className="litecoin cryptos"src={litecoin}/>
                    <img className="cryptos" src={bitcoin}/>
                    <img className="ethereum cryptos" src={ethereum}/>
                </div>
                {/* <div className="payments__cryptos">
                    <img src={greenbitcoin}/>
                    <img className="litecoin"src={litecoin}/>
                    <img src={bitcoin}/>
                    <img className="ethereum" src={ethereum}/>
                </div> */}
            </section>
            <div className="social-networks">
                <div className="networks-container">
                    <Link to="https://www.facebook.com/Chicksgroup" target="_blank">
                        <img src={facebook} alt="facebook-icon" srcset="" />
                    </Link> 
                    <Link to="https://www.instagram.com/chicksgold/" target="_blank">
                        <img src={instagram} alt="facebook-icon" srcset="" />
                    </Link>
                    <Link to="https://discord.com/invite/chicksgroup" target="_blank">
                        <img src={discord} alt="discord-icon" srcset="" />
                    </Link>
                    <Link to="https://twitter.com/chicksgold" target="_blank">
                        <img src={twitter} alt="twitter-icon" srcset="" />
                    </Link>
                </div>
            </div>
            <div className="border"></div>
            <section className="about-container">
                <div className="logo-email">
                    <img src={chicksLogo} alt="ChicksGold-image"/>
                    <Link>support@chicksgold.com</Link>
                </div>
                <ul className='footer-list-1 footer-list'> 
                        <h4>Chicks Gold</h4>
                        <img className='img-1 arrow' src={arrow} alt="" srcset="" />
                    <li>Games</li>
                    <li>About us</li> 
                    <li>Blog</li>
                    <li>Sitemap</li>
                </ul>
                <ul className='footer-list-2 footer-list'>
                        <h4>Support</h4> 
                    <img className='img-2 arrow' src={arrow} alt="" srcset="" />
                    <li>Contact us</li>
                    <li>FAQ</li>
                </ul>
                <ul className='footer-list-3 footer-list'>
                        <h4>Legal</h4>
                    <img className='img-3 arrow;' src={arrow} alt="" srcset="" />
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                    <li>Copyright Copy</li>
                </ul>
                <div className="about-container__stars">
                    <div className="stars__container">
                        <img src={star} alt="stars-image"/>
                        <img src={star} alt="stars-image"/>
                        <img src={star} alt="stars-image"/>
                        <img src={star} alt="stars-image"/>
                        <img src={star} alt="stars-image"/>
                    </div>
                    <p className="stars__text">
                        TrustPilot Reviews
                    </p>
                </div>
                {/* <p>© 2017 - 2020 Chicksgold.com. All Rights Reserved</p> */}
            </section>
            {/* padding-bottom: 25px;
    margin-left: 63px; */}
        </div>
    </>
}
