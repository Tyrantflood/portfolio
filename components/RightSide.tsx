import React from "react";

function RightSide() {
  return (
    <div className=" w-full h-full flex flex-col items-center justify-end gap-6 text-textLight">
      <p className=" text-sm rotate-90 w-80 tracking-wide  hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300">
        obiprince060@gmail.com{" "}
      </p>
      <div className="w-[2px] h-32 bg-textDark inline-flex"></div>
    </div>
  );
}

export default RightSide;
