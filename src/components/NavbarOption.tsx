import { IconType } from "react-icons";

import { Link } from "react-router-dom";

interface Props {
  icon: IconType;
  href?: string;
  title?: string;
  onClick?: () => void;
  element: number;
  darkMode?: boolean;
}

const NavbarOption: React.FC<Props> = ({
  icon: Icon,
  href,
  title,
  onClick,
  element,
  darkMode,
}) => {
  return (
    <>
      {href ? (
        <Link
          to={`/${href}`}
          className={`
            w-fit
            px-4
            py-1
            rounded-full
            cursor-pointer
            transition
            ${element !== 1 && "flex"}
            ${element !== 1 && "items-center"}
            ${element !== 1 && "gap-x-2"}
            ${darkMode ? "bg-white" : "bg-black"}
            ${darkMode ? "text-black" : "text-white"}
            ${darkMode ? "hover:bg-opacity-80" : "hover:bg-opacity-80"}
          `}
        >
          <Icon size={22} />
          <span>{title}</span>
        </Link>
      ) : (
        <div
          className={`
            w-fit
            px-2
            py-1
            rounded-full
            cursor-pointer
            transition
            ${element !== 1 && "flex"}
            ${element !== 1 && "items-center"}
            ${element !== 1 && "gap-x-4"}
            ${darkMode ? "bg-white" : "bg-black"}
            ${darkMode ? "text-black" : "text-white"}
            ${darkMode ? "hover:bg-opacity-80" : "hover:bg-opacity-80"}
          `}
          onClick={onClick}
        >
          <Icon size={22} />
        </div>
      )}
    </>
  );
};

export default NavbarOption;
