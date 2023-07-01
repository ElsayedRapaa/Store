import Container from "./Container";
import NavbarLink from "./NavbarLink";
import NavbarOption from "./NavbarOption";

import { Link } from "react-router-dom";

import { RiShoppingBag3Fill } from "react-icons/ri";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

interface Props {
  darkMode?: boolean;
}

const Navbar: React.FC<Props> = ({ darkMode }) => {
  return (
    <nav
      className={`
        py-4
        border-b
        transition
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
              <NavbarLink href="/" title="Home" />
              <NavbarLink href="/" title="Suits" />
              <NavbarLink href="/" title="Shirts" />
              <NavbarLink href="/" title="Glasses" />
            </ul>
            <div
              className="
                flex
                items-center
                gap-x-4
              "
            >
              {darkMode ? (
                <NavbarOption element={1} icon={MdOutlineLightMode} />
              ) : (
                <NavbarOption element={1} icon={MdOutlineDarkMode} />
              )}
              <NavbarOption
                element={2}
                icon={RiShoppingBag3Fill}
                href="cart"
                title="0"
              />
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
