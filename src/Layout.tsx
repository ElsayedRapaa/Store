import { useCallback } from "react";

import useModalCard from "./hooks/useModalCard";

import Container from "./components/Container";
import Cover from "./components/Cover";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import ModalCard from "./components/ModalCard";

interface Props {
  darkMode?: boolean;
}

const Layout: React.FC<Props> = ({ darkMode }) => {
  const modalCard = useModalCard();

  if (typeof window != "undefined" && modalCard.isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "unset";
  }

  const openModalCard = useCallback(() => {
    modalCard.onOpen();
  }, [modalCard]);

  return (
    <div
      className={`
        duration-1000
        ${darkMode && "bg-neutral-950"}
      `}
    >
      {modalCard.isOpen && (
        <div
          className="
            relative
            z-10
          "
        >
          <ModalCard darkMode={darkMode} />
        </div>
      )}
      <Navbar darkMode={darkMode} />
      <Container>
        <div
          className="
            py-8
          "
        >
          <Cover title="explore the special collection!" darkMode={darkMode} />
        </div>
        <Products
          title="Featrued Products"
          darkMode={darkMode}
          onClick={openModalCard}
        />
      </Container>
    </div>
  );
};

export default Layout;
