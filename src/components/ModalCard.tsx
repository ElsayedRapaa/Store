import { useCallback, useState } from "react";

import Container from "./Container";

import useModalCard from "../hooks/useModalCard";

import { BsCart2 } from "react-icons/bs";
import { MdClose } from "react-icons/md";

interface Props {
  darkMode?: boolean;
}

const ModalCard: React.FC<Props> = ({ darkMode }) => {
  const [imgSrc, setImgSrc] = useState<string>("/shirt_1.webp");

  const modalCard = useModalCard();

  const closeModalCard = useCallback(() => {
    modalCard.onClose();
  }, [modalCard]);

  const stopCloseModal = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  }, []);

  return (
    <div
      className="
        fixed
        inset-0
        z-10
        overflow-y-auto
        min-h-full
      "
      onClick={closeModalCard}
    >
      <div
        className="
          min-h-full
          bg-black/30
          fixed
          inset-0
          z-10
        "
      >
        <Container>
          <div
            className="
              h-screen
              flex
              items-center
              justify-center
            "
          >
            <div
              className={`
                flex
                md:flex-row
                flex-col
                rounded-xl
                relative
                gap-x-10
                h-[90vh]
                sm:h-fit
                w-full
                md:w-4/5
                lg:w-3/5
                p-8
                ${darkMode ? "bg-black" : "bg-white"}
                ${darkMode ? "text-white" : "bg-black"}
              `}
              onClick={stopCloseModal}
            >
              <button
                className={`
                  absolute
                  top-4
                  right-4
                  p-1
                  rounded-full
                  shadow-md
                  hover:shadow-lg
                  hover:bg-opacity-80
                  transition
                  ${darkMode ? "bg-white" : "bg-black"}
                  ${darkMode ? "text-black" : "text-white"}
                `}
                onClick={closeModalCard}
              >
                <MdClose size={20} />
              </button>
              <div
                className="
                  flex
                  flex-col
                  gap-y-4
                  items-center
                  sm:my-0
                  my-8
                "
              >
                <img
                  src={imgSrc}
                  alt="shirt_1"
                  className="
                    sm:w-64
                    sm:h-64
                    w-48
                    h-48
                    rounded-xl
                    object-cover
                  "
                />
                <div
                  className="
                    flex
                    flex-row
                    gap-x-2
                  "
                >
                  <img
                    src="/shirt_1.webp"
                    alt="shirt_1"
                    className={`
                      w-16
                      h-16
                      rounded-xl
                      object-cover
                      p-1
                      cursor-pointer
                      ${imgSrc.includes("1") && "border-2"}
                      ${darkMode ? "border-white" : "border-black"}
                    `}
                    onClick={() => setImgSrc("/shirt_1.webp")}
                  />
                  <img
                    src="/shirt_2.webp"
                    alt="shirt_2"
                    className={`
                      w-16
                      h-16
                      rounded-xl
                      object-cover
                      p-1
                      cursor-pointer
                      ${imgSrc.includes("2") && "border-2"}
                      ${darkMode ? "border-white" : "border-black"}
                    `}
                    onClick={() => setImgSrc("/shirt_2.webp")}
                  />
                </div>
              </div>
              <div
                className={`
                  flex
                  flex-col
                  gap-y-4
                  ${darkMode ? "text-white" : "text-black"}
                `}
              >
                <h1
                  className={`
                    text-3xl
                    font-bold
                  `}
                >
                  White Shirt
                </h1>
                <p
                  className="
                  font-semibold
                  text-2xl
                  "
                >
                  $59.00
                </p>
                <div
                  className="
                    flex
                    items-center
                    gap-x-6
                  "
                >
                  <span
                    className="
                      font-semibold
                      text-lg
                    "
                  >
                    Size:
                  </span>
                  <span
                    className="
                      text-xl
                      uppercase
                    "
                  >
                    XS
                  </span>
                </div>
                <div
                  className="
                    flex
                    items-center
                    gap-x-6
                  "
                >
                  <span
                    className="
                      font-semibold
                      text-lg
                    "
                  >
                    Color:
                  </span>
                  <span
                    className={`
                      w-6
                      h-6
                      rounded-full
                      border
                      ${darkMode ? "border-white" : "border-black"}
                      bg-white
                    `}
                  ></span>
                </div>
                <button
                  className={`
                    px-4
                    py-2
                    rounded-full
                    flex
                    items-center
                    justify-center
                    gap-x-2
                    text-xl
                    font-semibold
                    hover:bg-opacity-80
                    transition
                    mt-6
                    border-none
                    outline-none
                    
                    ${darkMode ? "bg-white" : "bg-black"}
                    ${darkMode ? "text-black" : "text-white"}
                  `}
                >
                  Add to Cart
                  <BsCart2 size={22} />
                </button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ModalCard;
