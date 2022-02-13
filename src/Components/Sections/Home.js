import React from 'react'

export default function Home() {
    return (
        <>
            <section id="home" className="slider-style-5 rn-section-gap pb--110 align-items-center with-particles">
                <div id="particles-js"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="banner-inner">
                                <div className="thumbnail gradient-border gradient-animation">
                                    <img id="border" className="gradient-border" src="assets/images/slider/banner-06.png" alt="" />
                                </div>
                                <h1>Al-Amin Bali</h1>
                                {/* type headline start*/}
                                <span className="cd-headline clip is-full-width">
                                    <span>I am a</span>
                                {/* ROTATING TEXT */}
                                <span className="cd-words-wrapper">
                                        <b className="is-visible">Lawyer.</b>
                                        <b className="is-hidden">Consulter.</b>
                                        <b className="is-hidden">Developer.</b>
                                    </span>
                                </span>
                                {/* type headline end */}
                                <div className="button-area">
                                    <a className="rn-btn" href="#contacts"><span>CONTACT ME</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}