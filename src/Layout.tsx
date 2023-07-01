import Navbar from "./components/Navbar";

import useDarkMode from "./hooks/useDarkMode";

const Layout = () => {
  const darkMode = useDarkMode();

  return (
    <div>
      <Navbar darkMode={darkMode.isOpen} />
    </div>
  );
};

export default Layout;
