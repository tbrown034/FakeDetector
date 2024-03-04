import { useState } from "react";

const Header = ({ showMainMenu }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="flex items-center justify-between p-4 bg-gray-100">
      {/* FakeDetector text redirects to MainMenu */}
      <h1
        onClick={showMainMenu}
        className="text-xl font-semibold cursor-pointer hover:text-gray-600 active:text-gray-400"
      >
        FakeDetector
      </h1>

      {/* Hamburger Menu Icon */}
      <i
        onClick={toggleMenu}
        className="cursor-pointer fa-solid fa-bars hover:text-gray-600 active:text-gray-400"
      ></i>
    </header>
  );
};

export default Header;
