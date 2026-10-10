import Navbar from "@/components/Navbar";
import Head from "next/head";
import LeftSide from "@/components/LeftSide";
import { motion } from "framer-motion";
import Banner from "@/components/Banner";
import About from "@/components/About";
import Arrow from "@/components/Arrow";
import Projects from "@/components/Projects";
import Tools from "@/components/Tools";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const SITE_URL = "https://princeobi.vercel.app/";
const DESCRIPTION =
  "Prince Obi is a fullstack web developer building responsive React and Next.js apps. See his projects, skills and how to get in touch.";

export default function Home() {
  return (
    <>
      <Head>
        <title>Prince Obi | Fullstack Web Developer</title>
        <meta name="description" content={DESCRIPTION} />
        <meta name="keywords" content="Prince Obi, Prince Obi Portfolio, fullstack web developer, React developer, Next.js developer" />
        <meta name="author" content="Prince Obi" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href={SITE_URL} />
        <link rel="icon" href="/assets/logo.png" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Prince Obi" />
        <meta property="og:title" content="Prince Obi | Fullstack Web Developer" />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:image" content={`${SITE_URL}og-image.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Prince Obi, fullstack web developer" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Prince Obi | Fullstack Web Developer" />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content={`${SITE_URL}og-image.png`} />
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
        </div>
      </main>
    </>
  );
}
