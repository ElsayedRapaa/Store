import Container from "./components/Container";
import Cover from "./components/Cover";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

interface Props {
  darkMode?: boolean;
}

const Layout: React.FC<Props> = ({ darkMode }) => {
  return (
    <div
      className={`
        duration-1000
        ${darkMode && "bg-neutral-950"}
      `}
    >
      <Navbar darkMode={darkMode} />
      <Container>
        <div
          className="
            py-8
          "
        >
          <Cover title="explore the special collection!" darkMode={darkMode} />
        </div>
        <Products title="Featrued Products" darkMode={darkMode} />
      </Container>
    </div>
  );
};

export default Layout;
