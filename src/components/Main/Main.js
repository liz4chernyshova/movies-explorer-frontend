import React from 'react';
import './Main.css';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import NavTab from '../NavTab/NavTab';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';

export default function Main(props) {
    return (
      <>
        <Promo />
        <AboutProject />
        <NavTab />
        <Techs />
        <AboutMe />
        <Portfolio />
      </>
    )
}
  