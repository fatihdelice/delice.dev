import Link from "../util/noScrollLink";
import classNames from "../util/classNames";

const Home = () => {
  return (
    <div className="mt-10">
      <div className="flex items-center ">
        {/* <svg
          width="58"
          height="64"
          viewBox="0 0 58 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-md brightness-125 hover:scale-110 transition-all -rotate-90"
        >
          <path
            d="M33.75 2.31976L52.3288 13.0463C55.2682 14.7433 57.0788 17.8795 57.0788 21.2735V42.7265C57.0788 46.1205 55.2682 49.2567 52.3288 50.9537L33.75 61.6802C30.8107 63.3773 27.1893 63.3773 24.25 61.6802L5.67116 50.9537C2.73185 49.2567 0.921162 46.1205 0.921162 42.7265V21.2735C0.921162 17.8795 2.73185 14.7433 5.67116 13.0463L24.25 2.31976C27.1893 0.622752 30.8107 0.622753 33.75 2.31976Z"
            fill="url(#paint0_radial_367_2)"
            stroke="white"
            strokeWidth="2"
          />
          <defs>
            <radialGradient
              id="paint0_radial_367_2"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(38.5 59.5) rotate(-114.114) scale(57.5196 84.2474)"
            >
              <stop stopColor="#002D85" />
              <stop offset="1" stopColor="#5AC9D8" />
            </radialGradient>
          </defs>
        </svg> */}

        <div className="flex flex-col">
          <h1 className="text-3xl  font-bold">Fatih Delice</h1>
          <h4 className="opacity-50">Computer Engineer — Developer, Creator, Writer</h4>
        </div>
      </div>
      <article className="mt-10">
        <p>
          Hey, I'm Fatih! I am a Computer Engineer, Developer, Creator. I love everything that include visuality and aesthetic. I am developing interfaces with popular technologies for mobile and web applications. Proficient in HTML, CSS, JavaScript; plus modern libraries and frameworks (React.js, React-Native, Next.js, Tailwind, SASS...). Possess working knowledge of Adobe Photoshop, Figma, Illustrator, Premiere.
        </p>
        <p>
          Find me on{" "}
          <Link href="https://twitter.com/fatihdew">
            <a target="_blank" className=" cursor-ne-resize  font-bold">Twitter,</a>
          </Link>{" "}
          <Link href="https://github.com/fatihdelice">
            <a target="_blank" className=" cursor-ne-resize  font-bold  ">GitHub, </a>
          </Link>{" "}
          <Link href="https://www.linkedin.com/in/fatihdelice/">
            <a target="_blank" className=" cursor-ne-resize  font-bold">LinkedIn,</a>
          </Link>{" "}
          <Link href="https://www.youtube.com/@fatihdev">
            <a target="_blank" className=" cursor-ne-resize  font-bold">YouTube.</a>
          </Link>
        </p>
        <Link href="mailto:delicex58@gmail.com">
          <a
            className={classNames(
              "px-3 py-2 bg-red-500 inline-block text-white inset-x-6 font-bold my-3",
              "rounded-lg hover:shadow-md hover:shadow-red-400/50 ease-in-out hover:translate-x-1 transition-all hover:-rotate-1",
              "dark:bg-red-600 dark:hover:bg-red-600/90 dark:hover:shadow-red-400/10"
            )}
          >
            <span>[HIRE ME]</span>
          </a>
        </Link>
      </article>
      <style jsx>{`
        p {
          margin-top: 20px;
          line-height: 1.4;
          font-size: 1.1rem;
        }
      `}</style>
    </div>
  );
};

export default Home;
