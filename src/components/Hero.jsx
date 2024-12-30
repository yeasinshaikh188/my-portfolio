import hero from "../assets/Hero.png"
import facebook from '../assets/facebook.png';
import twitter from '../assets/twitter.png';
import instagram from '../assets/instagram.png';
import linkedin from '../assets/linkedin.png';
import reactLogo from '../assets/React.png';
import htmlLogo from '../assets/html.png';
import cssLogo from '../assets/css.png';
import jsLogo from "../assets/JS.png"

const Hero = () => {
  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center lg:h-[90vh] justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-6 lg:px-0 lg:mt-0 mt-10">
            <h1 className="lg:text-7xl text-4xl font-bold lg:leading-snug">
              Hi There, <br />
              I'm Yeasin <span className="text-red-500">Shaikh</span>
            </h1>
            <p className="md:text-2xl text-xl mb-4">Web Developer</p>
            <p className="mb-4">
              I'm a passionate web developer with expertise in React, and modern web technologies. I love creating beautiful and functional websites that solve real-world problems.
            </p>
            <button className="bg-black text-white px-3 py-2 w-max rounded-md hover:bg-gray-800 transition">
              <a
                href="https://docs.google.com/document/d/1k_PZVpGyJ_1KvjYzOz2ew5Ril-A1MURm5K2yrMqE_HU/edit?tab=t.0"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </button>
          </div>
          <div className="md:w-1/2 relative flex justify-center items-center">
            {/* Spinning Background */}
            <div className="absolute w-[350px] h-[350px] rounded-full border-2 border-gray-300 animate-spin-slow flex items-center justify-center">
              <img
                src={reactLogo}
                alt="React Logo"
                className="w-14 absolute top-4"
              />
              <img
                src={htmlLogo}
                alt="HTML Logo"
                className="w-12 absolute left-4"
              />
              <img
                src={cssLogo}
                alt="CSS Logo"
                className="w-12 absolute right-4"
              />
              <img
                src={jsLogo}
                alt="JavaScript Logo"
                className="w-12 absolute bottom-4"
              />
            </div>
            {/* Hero Image */}
            <img
              src={hero}
              alt="Hero"
              className="lg:h-[90vh] h-96 z-10 relative"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-40 right-10 hidden bg-gray-200 p-4 md:flex flex-col gap-6 rounded-full">
        <img src={facebook} alt="Facebook" className="w-20" />
        <img src={instagram} alt="Instagram" className="w-20" />
        <img src={twitter} alt="Twitter" className="w-20" />
        <img src={linkedin} alt="LinkedIn" className="w-20" />
      </div>
    </section>
  );
};

export default Hero;
