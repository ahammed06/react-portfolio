import React from 'react'

export default function Home() {
    return (
        <>
            <section id="home" className="slider-style-5 rn-section-gap pb--110 align-items-center with-particles">
                <div id="particles-js"></div>
                <div className="slide slider-style-2 p-0">
                <div className="container">
                    <div className="row align-items-center row--30">
                        <div className="col-lg-5">
                            <div className="thumbnail style-2">
                                <div className="inner ">
                                    <img className="w-100" src="assets/images/slider/banner-04.png" alt="Personal Portfolio Images" />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-7 mt_md--40 mt_sm--40">
                            <div className="content">
                                <div className="inner">
                                    <h1 className="title">Hi, I’m <span>Jone Lee</span><br /> a
                                        <span className="header-caption" id="page-top">
                                            <span className="cd-headline clip is-full-width">
                                                <span className="cd-words-wrapper" style={{width: "178px"}}>
                                                    <b className="is-visible">Poem Writter.</b>
                                                    <b className="is-hidden">Web Coder.</b>
                                                    <b className="is-hidden">Content Writter.</b>
                                                </span>
                                        </span>
                                        </span>
                                    </h1>

                                    <div>
                                        <p className="description">I use animation as a third dimension by which to simplify
                                            experiences and kuiding thro each and every interaction. I’m not adding
                                            motion
                                            just to spruce things up, but doing it in ways that. Lorem ipsum dolor</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 col-xl-6 col-md-6 col-sm-6 col-12">
                                        <div className="social-share-inner-left">
                                            <span className="title">find with me</span>
                                            <ul className="social-share d-flex liststyle">
                                                <li className="facebook"><a href="#"><i data-feather="facebook"></i></a></li>
                                                <li className="instagram"><a href="#"><i data-feather="instagram"></i></a></li>
                                                <li className="linkedin"><a href="#"><i data-feather="linkedin"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-xl-6 col-md-6 col-sm-6 col-12 mt_mobile--30">
                                        <div className="skill-share-inner">
                                            <span className="title">best skill on</span>
                                            <ul className="skill-share d-flex liststyle">
                                                <li><img src="assets/images/icons/icons-04.png" alt="Icons Images" /></li>
                                                <li><img src="assets/images/icons/icons-05.png" alt="Icons Images" /></li>
                                                <li><img src="assets/images/icons/icons-06.png" alt="Icons Images" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </>
    )
}