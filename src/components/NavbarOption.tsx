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
            px-2
            py-1
            rounded-full
            border
            cursor-pointer
            hover:shadow-md
            transition
            ${element !== 1 && "flex"}
            ${element !== 1 && "items-center"}
            ${element !== 1 && "gap-x-4"}
            ${darkMode ? "hover:bg-white" : "hover:bg-black"}
            ${darkMode ? "text-white" : "text-black"}
            ${darkMode ? "hover:text-black" : "hover:text-white"}
          `}
        >
          <Icon size={24} />
          <span>{title}</span>
        </Link>
      ) : (
        <div
          className={`
            w-fit
            px-2
            py-1
            rounded-full
            border
            cursor-pointer
            hover:shadow-md
            transition
            ${element !== 1 && "flex"}
            ${element !== 1 && "items-center"}
            ${element !== 1 && "gap-x-4"}
            ${darkMode ? "hover:bg-white" : "hover:bg-black"}
            ${darkMode ? "text-white" : "text-black"}
            ${darkMode ? "hover:text-black" : "hover:text-white"}
          `}
        >
          <Icon size={24} />
        </div>
      )}
    </>
  );
};

export default NavbarOption;
