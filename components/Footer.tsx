import React from "react";
import { Reveal2 } from "./Reveal2";

function Footer() {
  return (
    <section className="max-w-contentContainer mx-auto py-24 mdl:py-28 flex flex-col justify-center items-center gap-4 lgl:gap-8 mdl:px-auto xl:px-auto">
      <Reveal2>
        <p className=" text-textLight font-bold ">
          Designed & Built by Prince Obi.
        </p>
          </Reveal2>
        <Reveal2>
              <p className=" text-textLight font-bold">&copy; All right reserved.</p>
        </Reveal2>
    </section>
  );
}

export default Footer;
