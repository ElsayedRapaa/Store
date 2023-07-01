import Navbar from "./components/Navbar";

interface Props {
  darkMode?: boolean;
}

const Layout: React.FC<Props> = ({ darkMode }) => {
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default Layout;
