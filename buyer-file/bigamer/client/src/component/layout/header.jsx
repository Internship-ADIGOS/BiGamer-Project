import { Component } from "react";
import { NavLink, Link, Navigate } from 'react-router-dom';
import { IoMdPerson } from "react-icons/io";
    
const contactNumber = "+800dasdadasd-123-4567 6587";
const contactAddress = "Beverley, New York 224 USA";

let isToken = localStorage.getItem('token')

const isLogout = () => {
    localStorage.removeItem('token')
    this.props.setState({status: false})
}

let SocialMideaList = [
    {
        IconName: 'icofont-facebook-messenger',
        IconLink: '#',
    },
    {
        IconName: 'icofont-twitter',
        IconLink: '#',
    },
    {
        IconName: 'icofont-vimeo',
        IconLink: '#',
    },
    {
        IconName: 'icofont-skype',
        IconLink: '#',
    },
    {
        IconName: 'icofont-rss-feed',
        IconLink: '#',
    },
]

class Header extends Component {
    menuTrigger() {
        document.querySelector('.menu').classList.toggle('active')
        document.querySelector('.header-bar').classList.toggle('active')
    }
    menuTriggerTwo() {
        document.querySelector('.header-top').classList.toggle('open')
        // document.querySelector('.header-bar').classList.toggle('active')
    }

    render() {

        window.addEventListener('scroll', function () {
            var value = window.scrollY;
            if (value > 200) {
                document.querySelector('.header-section').classList.add(['header-fixed'], ['fadeInUp'])
            } else {
                document.querySelector('.header-section').classList.remove(['header-fixed'], ['fadeInUp'])
            }
        });

        return (
            <header className="header-section">
                <div className="container">
                    <div className="header-holder d-flex flex-wrap justify-content-between align-items-center">
                        <div className="brand-logo d-none d-lg-inline-block">
                            <div className="logo">
                                <Link to="/">
                                    <img src="assets/images/logo/logo.png" alt="logo" />
                                </Link>
                            </div>
                        </div>
                        <div className="header-menu-part">
                            <div className="header-top">
                                <div className="header-top-area">
                                    <ul className="left">

                                    </ul>

                                </div>
                            </div>
                            <div className="header-bottom">
                                <div className="header-wrapper justify-content-lg-end">
                                <Link to='/payment' className="payment"><i className="icofont-users"></i> <span>Get Premium!</span></Link>
                                    <div className="mobile-logo d-lg-none">
                                        <Link to="/"><img src="assets/images/logo/logo.png" alt="logo" /></Link>
                                    </div>
                                    <div className="menu-area">
                                        <ul className="menu">

                                        </ul>
                                        {(() => {
                                            if (!isToken) {
                                                return (
                                                    <div>
                                                        <Link to="/login" className="login"><i className="icofont-user"></i> <span>LOG IN</span> </Link>
                                                        <Link to="/signup" className="signup"><i className="icofont-users"></i> <span>SIGN UP</span></Link>
                                                    </div>
                                                )
                                            } else {
                                                return (
                                                <>
                                                <Link to="/" className="logout" onClick={isLogout}><i className="icofont-users"></i> <span>LOGOUT</span></Link>
                                                <div className="justify-content-lg-end" style={{fontSize: "20px", paddingLeft:"30px" }}>
                                                <Link to="/profile" className="profile"><IoMdPerson /></Link>
                                                </div>
                                                </>
                                        )}
                                        })()}

                                        <div className="header-bar d-lg-none" onClick={this.menuTrigger}>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
