import { Link } from "react-router-dom";

import { BsArrowsFullscreen, BsCart2 } from "react-icons/bs";

interface Props {
  darkMode?: boolean;
}

const Card: React.FC<Props> = ({ darkMode }) => {
  return (
    <Link
      to="/"
      className={`
        p-4
        rounded-xl
        flex
        flex-col
        gap-y-3
        duration-1000
        group
        ${darkMode ? "bg-neutral-900" : "bg-neutral-200"}
        ${darkMode ? "text-white" : "text-black"}
      `}
    >
      <div
        className="
          rounded-lg
          overflow-hidden
          w-full
          h-72
          relative
        "
      >
        <img
          src="/shirt_1.webp"
          alt="product"
          className="
            w-full
            h-full
            object-cover
          "
        />
        <span
          className="
            w-fit
            h-fit
            rounded-full
            p-3
            bg-white
            text-black
            hover:bg-opacity-80
            transition
            absolute
            bottom-3
            left-[28%]
            opacity-0
            group-hover:opacity-100
            duration-300
          "
        >
          <BsArrowsFullscreen size={18} />
        </span>
        <span
          className="
            w-fit
            h-fit
            rounded-full
            p-3
            bg-white
            text-black
            hover:bg-opacity-80
            transition
            absolute
            bottom-3
            right-[28%]
            opacity-0
            group-hover:opacity-100
            duration-300
          "
        >
          <BsCart2 size={18} />
        </span>
      </div>
      <p
        className="
          font-semibold
          text-lg
          flex
          flex-col
          capitalize
        "
      >
        White Shirt
        <span
          className="
            text-neutral-500
            text-sm
            capitalize
          "
        >
          Shirt
        </span>
      </p>
      <h4
        className="
          font-semibold
        "
      >
        $59.00
      </h4>
    </Link>
  );
};

export default Card;
