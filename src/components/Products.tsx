import Card from "./Card";

interface Props {
  title: string;
  darkMode?: boolean;
}

const Products: React.FC<Props> = ({ title, darkMode }) => {
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
        <Card darkMode={darkMode} />
        <Card darkMode={darkMode} />
        <Card darkMode={darkMode} />
        <Card darkMode={darkMode} />
      </div>
    </section>
  );
};

export default Products;
