interface Props {
  title: string;
  darkMode?: boolean;
}

const Cover: React.FC<Props> = ({ title, darkMode }) => {
  return (
    <div
      className={`
        relative
        w-full
        h-[50vh]
        rounded-xl
        flex
        items-center
        justify-center
        duration-1000
        ${
          darkMode
            ? "bg-gradient-to-r from-[#FBAB7E] to-[#F7CE68]"
            : "bg-gradient-to-r from-[#85FFBD] to-[#FFFB7D]"
        }
      `}
    >
      <h2
        className={`
          sm:max-w-xl
          max-w-xs
          text-3xl
          sm:text-5xl
          lg:text-6xl
          font-semibold
          capitalize
          text-center
          duration-1000
          ${darkMode ? "text-white" : "text-black"}
        `}
      >
        {title}
      </h2>
    </div>
  );
};

export default Cover;
