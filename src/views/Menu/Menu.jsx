import React, { useState, useEffect } from 'react';
import './Menu.scss';
import Image1 from '../../assets/images/menu/foto-entradas.png';
import Image2 from '../../assets/images/menu/foto-pratos-principais.png';
import Image3 from '../../assets/images/menu/foto-sobremesas.png';
import Image1Mobile from '../../assets/images/menu/mobile-foto-entradas.png';
import Image2Mobile from '../../assets/images/menu/mobile-foto-pratos-principais.png';
import Image3Mobile from '../../assets/images/menu/mobile-foto-sobremesas.png';
import MenuLogo from '../../assets/images/menu-logo.png';
import { MenuPortrait, MenuList, MenuToggler } from '../../components';
import { entryMenu, mainMenu, dessertsMenu } from './MenuLists';
import { whatsappNumber } from '../../info';

const Menu = () => {
  const [currentMenu, setCurrentMenu] = useState("mainMenu");

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  useEffect(() => {
    console.log(currentMenu);
  }, [currentMenu]);

  const renderMobileImage = (option) => {

    const types = {
      'entryMenu': Image1Mobile,
      'mainMenu': Image2Mobile,
      'dessertsMenu': Image3Mobile
    };

    return types[currentMenu];
  };

  return (
    <div id="Menu">

      <div className="desktop-menu">
        <h2 className="title-page">Para paladares requintados</h2>

        <div className="entry-menu">

          <div className="entry-menu-portrait-container">
            <MenuPortrait 
              photo={Image1}
              alt="Entradas"
              title="Entradas"
              width={'50vw'}
              height={'385px'}
              maxWidth={'565px'}
              minWidth={'400px'}
            />
          </div>

          <div className="entry-menu-list-container">
            <MenuList 
              list={entryMenu}
              hasDescription={true}
            />
          </div>
          
          <div className="ask-delivery">
            <img src={MenuLogo} alt="Logo Entre Amigos Gastronomia" />
            <a
              className="ask-delivery-button"
              href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=Olá! Eu gostaria de fazer o meu pedido!`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Faça o seu pedido
            </a>
          </div>
        </div>

        <div className="main-menu">

          <MenuPortrait 
            photo={Image2}
            alt="Pratos Principais"
            title="Pratos Principais"
            width={'90vw'}
            height={'385px'}
            maxWidth={'1144px'}
            minWidth={'980px'}
          />

          <div className="main-menu-lists-container">

            <div className="left">
              <MenuList 
                list={mainMenu.slice(0, mainMenu.length / 2)}
                hasDescription={true}
              />
            </div>

            <div className="right">
              <MenuList 
                list={mainMenu.slice(mainMenu.length / 2)}
                hasDescription={true}
              />
            </div>

          </div>
        </div>

        <div className="desserts-menu">
          <MenuPortrait 
            photo={Image3}
            alt="Doces"
            title="Doces"
            width={'50vw'}
            height={'425px'}
            maxWidth={'620px'}
            minWidth={'550px'}
          />

          <div className="desserts-menu-list-container">
            <MenuList 
              list={dessertsMenu.slice(0,7)}
            />
          </div>
        </div>
      </div>

      <div className="mobile-menu">
        <div 
          style={{
            backgroundImage: `url(${renderMobileImage(currentMenu)})`
          }}
          className="mobile-banner" 
        />

        <MenuToggler
          current={currentMenu}
          toggleMenu={setCurrentMenu} 
        />

        <div className="list-container">
          {currentMenu === 'entryMenu' &&
            <MenuList 
            list={entryMenu}
            hasDescription={true}
          />}

          {currentMenu === 'mainMenu' &&
            <MenuList 
            list={mainMenu}
            hasDescription={true}
          />}

          {currentMenu === 'dessertsMenu' &&
            <MenuList 
            list={dessertsMenu}
          />}
        </div>

        <div className="ask-delivery-mobile">
          <a
            className="ask-delivery-mobile-button"
            href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=Olá! Eu gostaria de fazer o meu pedido!`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Faça o seu pedido
          </a>
        </div>
      </div>

    </div>
  );
};

export default Menu;
