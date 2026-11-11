import React from "react";

const Rotate = ({
  index,
  children,
}: {
  index: number;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={`absolute sm:h-16 h-[3.4rem] origin-left flex place-content-end  w-1/2 rotate-${index}`}
    >
      {children}
    </div>
  );
};

export default Rotate;
