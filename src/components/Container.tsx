import React from "react";

interface Props {
  children?: React.ReactNode;
}

const Container: React.FC<Props> = ({ children }) => {
  return (
    <div
      className="
        max-w-[2520px]
        mx-auto
        sm:px-6
        px-4
      "
    >
      {children}
    </div>
  );
};

export default Container;
