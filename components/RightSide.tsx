import React from "react";

function RightSide() {
  return (
    <div className=" w-full h-full flex flex-col items-center justify-end gap-6 text-textLight">
      <a href="princeobi124@gmail.com">
        <p className=" text-sm rotate-90 w-80 tracking-wide  hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300">
          princeobi124@gmail.com{" "}
        </p>
      </a>
      <div className="w-[2px] h-32 bg-textDark inline-flex"></div>
    </div>
  );
}

export default RightSide;
