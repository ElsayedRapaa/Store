import Container from "./components/Container";
import Cover from "./components/Cover";
import Navbar from "./components/Navbar";

interface Props {
  darkMode?: boolean;
}

const Layout: React.FC<Props> = ({ darkMode }) => {
  return (
    <div>
      <Navbar darkMode={darkMode} />
      <Container>
        <div
          className="
            py-8
          "
        >
          <Cover title="explore the special collection!" darkMode={darkMode} />
        </div>
      </Container>
    </div>
  );
};

export default Layout;
