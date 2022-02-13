import React from 'react'

export default function Service() {
    return (
        <>
            <div className="rn-service-area rn-section-gap section-separator" id="features">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center" data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" data-aos-once="true">
                                <span className="subtitle">Features</span>
                                <h2 className="title">What I Do</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row row--25 mt_md--10 mt_sm--10">

                        {/* Start Single Service */}
                        <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" data-aos-once="true" className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30">
                            <div className="rn-service">
                                <div className="inner">
                                    <div className="icon">
                                        <i data-feather="menu"></i>
                                    </div>
                                    <div className="content">
                                        <h4 className="title"><a href="#">Business Stratagy</a></h4>
                                        <p className="description">I throw myself down among the tall grass by the stream as I
                                            lie close to the earth.</p>
                                        <a className="read-more-button" href="#"><i className="feather-arrow-right"></i></a>
                                    </div>
                                </div>
                                <a className="over-link" href="#"></a>
                            </div>
                        </div>
                        {/* End SIngle Service */}
                        {/* Start Single Service */}
                        <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="300" data-aos-once="true" className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30">
                            <div className="rn-service">
                                <div className="inner">
                                    <div className="icon">
                                        <i data-feather="book-open"></i>
                                    </div>
                                    <div className="content">
                                        <h4 className="title"><a href="#">App Development</a></h4>
                                        <p className="description"> It uses a dictionary of over 200 Latin words, combined with
                                            a handful of model sentence.</p>
                                        <a className="read-more-button" href="#"><i className="feather-arrow-right"></i></a>
                                    </div>
                                </div>
                                <a className="over-link" href="#"></a>
                            </div>
                        </div>
                        {/* End SIngle Service */}
                        {/* Start Single Service */}
                        <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="500" data-aos-once="true" className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30">
                            <div className="rn-service">
                                <div className="inner">
                                    <div className="icon">
                                        <i data-feather="tv"></i>
                                    </div>
                                    <div className="content">
                                        <h4 className="title"><a href="#">App Development</a></h4>
                                        <p className="description">I throw myself down among the tall grass by the stream as I
                                            lie close to the earth.</p>
                                        <a className="read-more-button" href="#"><i className="feather-arrow-right"></i></a>
                                    </div>
                                </div>
                                <a className="over-link" href="#"></a>
                            </div>
                        </div>
                        {/* End SIngle Service */}

                    </div>
                </div>
            </div>
        </>
    )
}