import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
      <h1>Mi Portfolio</h1>
      <nav>
        <a href="#about">Sobre Mí</a>
        <a href="#projects">Proyectos</a>
        <a href="#contact">Contacto</a>
      </nav>
    </header>
  );
};

export default Header;
