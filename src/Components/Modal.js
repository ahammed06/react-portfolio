import React from 'react'

export default function Modal() {
    return (
        <>
            {/* Modal Portfolio Body area Start */}
            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i data-feather="x"></i></span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="row align-items-center">

                                <div className="col-lg-6">
                                    <div className="portfolio-popup-thumbnail">
                                        <div className="image">
                                            <img className="w-100" src="assets/images/portfolio/portfolio-04.jpg" alt="slide" />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="text-content">
                                        <h3>
                                            <span>Featured - Design</span> App Design Development.
                                        </h3>
                                        <p className="mb--30">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate distinctio assumenda explicabo veniam temporibus eligendi.</p>
                                        <p>Consectetur adipisicing elit. Cupiditate distinctio assumenda. dolorum alias suscipit rerum maiores aliquam earum odit, nihil culpa quas iusto hic minus!</p>
                                        <div className="button-group mt--20">
                                            <a href="#" className="rn-btn thumbs-icon">
                                                <span>LIKE THIS</span>
                                                <i data-feather="thumbs-up"></i>
                                            </a>
                                            <a href="#" className="rn-btn">
                                                <span>VIEW PROJECT</span>
                                                <i data-feather="chevron-right"></i>
                                            </a>
                                        </div>

                                    </div>
                                    {/* End of .text-content */}
                                </div>
                            </div>
                            {/* End of .row Body*/}
                        </div>
                    </div>
                </div>
            </div>
            {/* End Modal Portfolio area */}
            {/* Modal Blog Body area Start */}
            <div className="modal fade" id="exampleModalCenters" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-news" role="document">
                    <div className="modal-content">

                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i data-feather="x"></i></span>
                            </button>
                        </div>

                        {/* End of .modal-header */}

                        <div className="modal-body">
                            <img src="assets/images/blog/blog-big-01.jpg" alt="news modal" className="img-fluid modal-feat-img" />
                            <div className="news-details">
                                <span className="date">2 May, 2021</span>
                                <h2 className="title">Digital Marketo to Their New Office.</h2>
                                <p>Nobis eleifend option congue nihil imperdiet doming id quod mazim placerat
                                    facer
                                    possim assum.
                                    Typi non
                                    habent claritatem insitam; est usus legentis in iis qui facit eorum
                                    claritatem.
                                    Investigationes
                                    demonstraverunt
                                    lectores legere me lius quod ii legunt saepius. Claritas est etiam processus
                                    dynamicus, qui
                                    sequitur
                                    mutationem consuetudium lectorum.</p>
                                <h4>Nobis eleifend option conguenes.</h4>
                                <p>Mauris tempor, orci id pellentesque convallis, massa mi congue eros, sed
                                    posuere
                                    massa nunc quis
                                    dui.
                                    Integer ornare varius mi, in vehicula orci scelerisque sed. Fusce a massa
                                    nisi.
                                    Curabitur sit
                                    amet
                                    suscipit nisl. Sed eget nisl laoreet, suscipit enim nec, viverra eros. Nunc
                                    imperdiet risus
                                    leo,
                                    in rutrum erat dignissim id.</p>
                                <p>Ut rhoncus vestibulum facilisis. Duis et lorem vitae ligula cursus venenatis.
                                    Class aptent
                                    taciti sociosqu
                                    ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc vitae
                                    nisi
                                    tortor. Morbi
                                    leo
                                    nulla, posuere vel lectus a, egestas posuere lacus. Fusce eleifend hendrerit
                                    bibendum. Morbi
                                    nec
                                    efficitur ex.</p>
                                <h4>Mauris tempor, orci id pellentesque.</h4>
                                <p>Nulla non ligula vel nisi blandit egestas vel eget leo. Praesent fringilla
                                    dapibus dignissim.
                                    Pellentesque
                                    quis quam enim. Vestibulum ultrices, leo id suscipit efficitur, odio lorem
                                    rhoncus dolor, a
                                    facilisis
                                    neque mi ut ex. Quisque tempor urna a nisi pretium, a pretium massa
                                    tristique.
                                    Nullam in
                                    aliquam
                                    diam. Maecenas at nibh gravida, ornare eros non, commodo ligula. Sed
                                    efficitur
                                    sollicitudin
                                    auctor.
                                    Quisque nec imperdiet purus, in ornare odio. Quisque odio felis, vestibulum
                                    et.</p>
                            </div>

                            {/* Comment Section Area Start */}
                            <div className="comment-inner">
                                <h3 className="title mb--40 mt--50">Leave a Reply</h3>
                                <form action="#">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-12 col-12">
                                            <div className="rnform-group"><input type="text" placeholder="Name" />
                                            </div>
                                            <div className="rnform-group"><input type="email" placeholder="Email" />
                                            </div>
                                            <div className="rnform-group"><input type="text" placeholder="Website" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-12">
                                            <div className="rnform-group">
                                                <textarea placeholder="Comment"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <a className="rn-btn" href="#"><span>SUBMIT NOW</span></a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            {/* Comment Section End */}
                        </div>
                        {/* End of .modal-body */}
                    </div>
                </div>
            </div>
            {/* End Modal Blog area */}
        </>
    )
}