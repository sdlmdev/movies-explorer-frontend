import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';
import Promo from '../../components/Promo/Promo';
import AboutProject from '../../components/AboutProject/AboutProject';
import Techs from '../../components/Techs/Techs';
import AboutMe from '../../components/AboutMe/AboutMe';
import Portfolio from '../../components/Portfolio/Portfolio';
import Footer from '../../components/Footer/Footer';

function Main({ isLoggedIn }) {
  return (
    <>
      <Header
        isLoggedIn={isLoggedIn}
      />
      <main>
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}

Main.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default Main;
