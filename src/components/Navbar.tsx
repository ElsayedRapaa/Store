import { useCallback } from "react";
import { Link } from "react-router-dom";

import Container from "./Container";
import NavbarLink from "./NavbarLink";
import NavbarOption from "./NavbarOption";

import { RiShoppingBag2Line } from "react-icons/ri";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

import useDarkMode from "../hooks/useDarkMode";

interface Props {
  darkMode?: boolean;
}

const Navbar: React.FC<Props> = ({ darkMode }) => {
  const dark = useDarkMode();

  const handleDarkMode = useCallback(() => {
    dark.onOpen();
  }, [dark]);

  const handleLightMode = useCallback(() => {
    dark.onClose();
  }, [dark]);

  return (
    <nav
      className={`
        py-4
        border-b
        transition
        duration-1000
        ${darkMode ? "bg-neutral-950" : "bg-white"}
      `}
    >
      <Container>
        <div
          className="
            flex
            items-center
            gap-x-6
          "
        >
          <Link to="/">
            <img
              src={darkMode ? "/logo-dark.png" : "logo-light.png"}
              alt="Logo"
              className="
                w-8
                h-8
              "
            />
          </Link>
          <div
            className="
              w-full
              flex
              items-center
              justify-between
            "
          >
            <ul
              className="
              list-none
              p-0
              flex
              items-center
              gap-x-4
            "
            >
              <NavbarLink href="/" title="Home" darkMode={dark.isOpen} />
              <NavbarLink href="/" title="Suits" darkMode={dark.isOpen} />
              <NavbarLink href="/" title="Shirts" darkMode={dark.isOpen} />
              <NavbarLink href="/" title="Glasses" darkMode={dark.isOpen} />
            </ul>
            <div
              className="
                flex
                items-center
                gap-x-4
              "
            >
              {darkMode ? (
                <NavbarOption
                  element={1}
                  icon={MdOutlineLightMode}
                  darkMode={dark.isOpen}
                  onClick={handleLightMode}
                />
              ) : (
                <NavbarOption
                  element={1}
                  icon={MdOutlineDarkMode}
                  darkMode={dark.isOpen}
                  onClick={handleDarkMode}
                />
              )}
              <NavbarOption
                element={2}
                icon={RiShoppingBag2Line}
                href="cart"
                title="0"
                darkMode={dark.isOpen}
              />
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
