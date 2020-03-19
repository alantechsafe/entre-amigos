import React, { useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { MainHeader, Nav } from './styles';
import MenuButton from '../MenuButton';
import LogoHeader from '../../assets/images/logo_header.png';

const Header = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const opacityValue = pathname === '/' ? 0 : 1;

  useEffect(() => {
    if (pathname === '/') {
      window.addEventListener('scroll', opacityEffect);
      let activeBackground = document.querySelector(".link-background");
      activeBackground.style.opacity = 0;
    }

    return () => {
      window.removeEventListener('scroll', opacityEffect);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  let prevScrollpos = window.pageYOffset;

  const opacityEffect = () => {
    const currentScrollPos = window.pageYOffset;
    const parentContainer = document.querySelector(".carouselContainer");
    const parentHeight = parentContainer.offsetHeight;
    const headerBackground = document.querySelector(".header-background");
    const activeBackground = document.querySelector(".link-background");

    if (parentHeight === 240) {
      headerBackground.style.opacity = currentScrollPos / 185;
    }
    if (parentHeight < 400) {
      headerBackground.style.opacity = currentScrollPos / 220;
      activeBackground.style.opacity = currentScrollPos / 250;
    }
    else if (parentHeight < 600) {
      headerBackground.style.opacity = currentScrollPos / 350;
      activeBackground.style.opacity = currentScrollPos / 350;
    }
    else {
      headerBackground.style.opacity = currentScrollPos / 550;
      activeBackground.style.opacity = currentScrollPos / 350;
    }
    
    prevScrollpos = currentScrollPos;
  };

  return (
    <MainHeader>
      <div className="container header-container">
        <div 
          className="header-background"
          style={{opacity: opacityValue}} 
        />
        <Link to="/">
          <img src={LogoHeader} alt="Logo do Entre Amigos Gastronomia" />
        </Link>
          <Nav>
            <div className="link-container">
              <NavLink to="/" exact activeClassName="active">Home</NavLink>
              <div className="link-background homeNav"></div>
            </div>
            <div className="link-container">
              <NavLink to="/nossos-pratos" activeClassName="active">Nossos pratos</NavLink>
              <div className="link-background"></div>
            </div>
            <div className="link-container">
              <NavLink to="/galeria" activeClassName="active">Galeria</NavLink>
              <div className="link-background"></div>
            </div>
            <div className="link-container">
              <NavLink to="/eventos" activeClassName="active">Eventos</NavLink>
              <div className="link-background"></div>
            </div>
            <div className="link-container">
              <NavLink to="/contato" exact activeClassName="active">Contato</NavLink>
              <div className="link-background"></div>
            </div>
            {/* <NavLink to="/nossos-pratos" activeClassName="active">Nossos pratos</NavLink>
            <NavLink to="/galeria" activeClassName="active">Galeria</NavLink>
            <NavLink to="/eventos" activeClassName="active">Eventos</NavLink>
            <NavLink to="/contato" activeClassName="active">Contato</NavLink> */}
          </Nav>
        <MenuButton />
      </div>
    </MainHeader>
  );
};

export default Header;
