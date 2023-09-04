import Navbar from "@/components/Navbar";
import LeftSide from "@/components/LeftSide";
import RightSide from "@/components/RightSide";
import Head from "next/head";
import { motion } from "framer-motion";
import Banner from "@/components/Banner";
import About from "@/components/About";
import Arrow from "@/components/Arrow";
import Projects from "@/components/Projects";
import Tools from "@/components/Tools";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Prince Obi</title>
        <meta name="description" content="Prince Obi's Portfolio" />
        <meta name="keywords" content="Prince Obi, Prince Obi Portfolio" />
        <meta name="author" content="Prince Obi" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href=" /assets/logo.png" />
      </Head>

      <main className=" scrollbar-thumb-textGreen scrollbar-thin scrollbar-track-hoverColor scrollbar-corner-textGreen w-full h-screen font-bodyFont bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll">
        <Navbar />

        <div className="w-full h-[88vh] xl:flex items-center  gap-20 justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0"
          >
            <LeftSide />
          </motion.div>

          <div className="h-[88vh] mx-auto p-4">
            <Banner />
            <Arrow />
            <About />
            <Projects />
            <Tools />
            <Contact />
            <Footer />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0"
          >
            <RightSide />
          </motion.div>
        </div>
      </main>
    </>
  );
}
