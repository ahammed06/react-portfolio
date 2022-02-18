import React from 'react'

export default function Header() {
    return (
        <>
            {/* start Header area */}
            <div className="d-none d-xl-block">
                <header className="rn-header-area d-flex align-items-start flex-column left-header-style">
                    <div className="logo-area">
                        <a href="#">
                            <img src="assets/images/logo/logo-06.png" alt="personal-logo" />
                        </a>
                    </div>
                    <nav id="sideNavs" className="mainmenu-nav navbar-example2">
                        <ul className="primary-menu nav nav-pills">
                            <li className="nav-item"><a className="nav-link smoth-animation-two active" href="#home"><i data-feather="home"></i> Home</a></li>
                            <li className="nav-item"><a className="nav-link smoth-animation-two" href="#skill"> <i data-feather="code"></i>Skill</a></li>
                            <li className="nav-item"><a className="nav-link smoth-animation-two" href="#features"> <i data-feather="briefcase"></i>Features</a></li>
                            <li className="nav-item"><a className="nav-link smoth-animation-two" href="#portfolio"><i data-feather="layers"></i>Portfolio</a></li>
                            <li className="nav-item"><a className="nav-link smoth-animation-two" href="#resume"><i data-feather="users"></i>Resume</a></li>
                            <li className="nav-item"><a className="nav-link smoth-animation-two" href="#clients"><i data-feather="user"></i>Clients</a></li>
                            <li className="nav-item"><a className="nav-link smoth-animation-two" href="#contacts"><i data-feather="message-circle"></i>Contact</a></li>
                        </ul>
                    </nav>
                    <div className="footer">
                        <div className="social-share-style-1 mt--40">
                            <span className="title">find with me</span>
                            <ul className="social-share-icons d-flex liststyle">
                                <li className="facebook"><a href="#"><i data-feather="facebook"></i></a></li>
                                <li className="instagram"><a href="#"><i data-feather="instagram"></i></a></li>
                                <li className="linkedin"><a href="#"><i data-feather="linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="theme-changer">
                        <label className="switch">
                            <input type="checkbox" defaultChecked />
                            <span className="slider round"><i data-feather="sun" className="csun"></i><i data-feather="moon" className="cmoon"></i></span>
                        </label>
                    </div>
                </header>
            </div>
            {/* start Header area end */}

            {/* Header Mobile Bar  */}
            <div className="header-style-2 d-block d-xl-none rn-header haeder-default black-logo-version header--fixed header--sticky">
                <div className="row align-items-center">
                    <div className="col-6">
                        <div className="logo">
                            <a href="#">
                                <img src="assets/images/logo/logo.png" alt="Logo" />
                            </a>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="header-right text-right">
                            <div className="hamberger-menu">
                                <i id="menuBtn" className="feather-menu humberger-menu"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Header Mobile Bar  */}

            {/* Start Popup Mobile Menu  */}
            <div className="popup-mobile-menu">
                <div className="inner">
                    <div className="menu-top">
                        <div className="menu-header">
                            <a className="logo" href="#">
                                <img src="assets/images/logo/logos-circle.png" alt="Personal Portfolio" />
                            </a>
                            <div className="close-button">
                                <button className="close-menu-activation close"><i data-feather="x"></i></button>
                            </div>
                        </div>
                        {/* <p className="discription">Welcome to my website.</p> */}
                    </div>
                    <div className="content">
                        <ul className="primary-menu nav nav-pills">
                            <li className="nav-item"><a className="nav-link smoth-animation-two active" href="#home">Home</a></li>
                            <li className="nav-item"><a className="nav-link smoth-animation-two" href="#skill">Skill</a></li>
                            <li className="nav-item"><a className="nav-link smoth-animation-two" href="#features">Features</a></li>
                            <li className="nav-item"><a className="nav-link smoth-animation-two" href="#portfolio">Portfolio</a></li>
                            <li className="nav-item"><a className="nav-link smoth-animation-two" href="#resume">Resume</a></li>
                            <li className="nav-item"><a className="nav-link smoth-animation-two" href="#clients">Clients</a></li>
                            <li className="nav-item"><a className="nav-link smoth-animation-two" href="#contacts">Contact</a></li>
                        </ul>
                        {/* social sharea area */}
                        <div className="social-share-style-1 mt--40">
                            <span className="title">find with me</span>
                            <ul className="social-share d-flex liststyle">
                                <li className="facebook"><a href="#"><i data-feather="facebook"></i></a></li>
                                <li className="instagram"><a href="#"><i data-feather="instagram"></i></a></li>
                                <li className="linkedin"><a href="#"><i data-feather="linkedin"></i></a></li>
                            </ul>
                        </div>
                        {/* end */}
                    </div>
                </div>
            </div>
            {/* End Popup Mobile Menu  */}
        </>
    )
}