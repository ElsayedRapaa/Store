import Layout from "./Layout";
import useDarkMode from "./hooks/useDarkMode";

function App() {
  const darkMode = useDarkMode();

  return (
    <div>
      <Layout darkMode={darkMode.isOpen} />
    </div>
  );
}

export default App;
