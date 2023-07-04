import Card from "./Card";

interface Props {
  title: string;
  darkMode?: boolean;
  onClick: () => void;
}

const Products: React.FC<Props> = ({ title, darkMode, onClick }) => {
  return (
    <section
      className="
        pb-12
      "
    >
      <h1
        className={`
          text-xl
          sm:text-3xl
          font-semibold
          text-left
          pt-6
          pb-4
          duration-1000
          ${darkMode ? "text-white" : "text-black"}
        `}
      >
        {title}
      </h1>
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          gap-4
        "
      >
        <Card darkMode={darkMode} onClick={onClick} />
        <Card darkMode={darkMode} onClick={onClick} />
        <Card darkMode={darkMode} onClick={onClick} />
        <Card darkMode={darkMode} onClick={onClick} />
      </div>
    </section>
  );
};

export default Products;
