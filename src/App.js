// import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Modal from './Components/Modal';
import BackToTop from './Components/BackToTop';

import Home from './Components/Sections/Home';
import Service from './Components/Sections/Service';
import Portfolio from './Components/Sections/Portfolio';
import Resume from './Components/Sections/Resume';
import Client from './Components/Sections/Client';
import Pricing from './Components/Sections/Pricing';
import News from './Components/Sections/News';
import Contact from './Components/Sections/Contact';

function App() {
  return (
    <>
      {/* Start Header Area */}
      <Header />
      {/* End Header Area */}

      <main className="page-wrapper-two">
        {/* start slider area */}
        <Home />
        {/* start slider area End */}

        {/* Start Service Area */}
        <Service />
        {/* End Service Area  */}

        {/* Start Portfolio Area */}
        <Portfolio />
        {/* End portfolio Area */}

        {/* Start Resume Area */}
        <Resume />
        {/* End Resume Area */}

        {/* Start Client Area */}
        <Client />
        {/* End client section */}

        {/* Pricing Area */}
        <Pricing />
        {/* pricing area */}

        {/* Start News Area */}
        <News />
        {/* ENd Mews Area */}

        {/* Start Contact section */}
        <Contact />
        {/* End Contuct section */}

        {/* Start Footer Area */}
        <Footer />
        {/* End Footer Area */}

        {/* modal area */}
        <Modal />
        {/* modal area End */}

        {/* Back to  top Start */}
        <BackToTop />
        {/* Back to top end */}

    </main>
    </>
  );
}

export default App;
