import { Link } from "react-router-dom";

interface Props {
  href: string;
  title: string;
  darkMode?: boolean;
}

const NavbarLink: React.FC<Props> = ({ href, title, darkMode }) => {
  return (
    <li
      className={`
        h-fit
        w-fit
        font-semibold
        text-neutral-500
        hover:text-black
        transition
        ${darkMode && "text-white/80"}
        ${darkMode && "hover:text-white"}
      `}
    >
      <Link
        to={href}
        className="
          block
          w-full
          h-full
        "
      >
        {title}
      </Link>
    </li>
  );
};

export default NavbarLink;
