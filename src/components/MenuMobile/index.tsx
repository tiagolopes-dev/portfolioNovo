import { useState } from 'react';
import { IoMdMenu } from 'react-icons/io';
import logo from '../../assets/Screenshot_13-removebg-preview-1.svg';

export function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="w-full py-4 sm:block md:hidden" id="menuMobile">
      <div>
        <div className="flex items-center justify-between gap-2">
          <img src={logo} alt="logo do projeto" className="items-center" />
          <IoMdMenu color="white" size={30} onClick={toggleMenu} className="cursor-pointer" />
        </div>

        <nav
          className={`${
            isMenuOpen ? 'max-h-64' : 'max-h-0'
          } transition-all duration-300 ease-in-out overflow-hidden`}>
          <ul className="flex flex-col text-white font-medium text-center p-2">
            <li>
              <a href="#Home" onClick={closeMenu}>Home</a>
            </li>
            <li>
              <a href="#AboutMe" onClick={closeMenu}>About me</a>
            </li>
            <li>
              <a href="#Technologies" onClick={closeMenu}>Technologies</a>
            </li>
            <li>
              <a href="#Projects" onClick={closeMenu}>Projects</a>
            </li>
            <li>
              <a href="#Courses" onClick={closeMenu}>Courses</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

