import Link from "../util/noScrollLink";

const About = () => {
    return (
        <article className="mt-10 w-main-content max-w-full mv-0 mx-auto grid sm:px-7 px-3 snap-center">
            <p className="opacity-70 text-base">
                Hey, I am Fatih Delice, a Computer Engineer, Developer. I love everything that include visuality and aesthetic. I am developing interfaces with popular technologies for mobile and web applications. <br /><br />
                Proficient in HTML, CSS, JavaScript; plus modern libraries and frameworks (Angular.js, React.js, React-Native, Next.js, Tailwind, SASS...). Possess working knowledge of Adobe Photoshop, Figma, Illustrator, Premiere.
            </p>
            <p>
                <span className="opacity-70">Find me on</span>{" "}
                <Link href="https://twitter.com/fatihdelice_">
                    <a target="_blank" className=" cursor-ne-resize">Twitter,</a>
                </Link>{" "}
                <Link href="https://github.com/fatihdelice">
                    <a target="_blank" className=" cursor-ne-resize">GitHub, </a>
                </Link>{" "}
                <Link href="https://www.linkedin.com/in/fatihdelice/">
                    <a target="_blank" className=" cursor-ne-resize">LinkedIn,</a>
                </Link>{" "}
                <Link href="https://www.youtube.com/fatihdelice?sub_confirmation=1">
                    <a target="_blank" className=" cursor-ne-resize">YouTube.</a>
                </Link>{" "}
                <span className="opacity-70">Maybe</span>{" "}
                <Link href="https://instagram.com/delice.dev">
                    <a target="_blank" className=" cursor-ne-resize">Instagram.</a>
                </Link><br />

                <span className="opacity-70">You can read my articles on </span>{" "}
                <Link href="https://fatihdelice.medium.com/">
                    <a target="_blank" className=" cursor-ne-resize">Medium.</a>
                </Link><br />

                <span className="opacity-70">Mail me at</span>{" "}
                <Link href="mailto:fatihdelice@outlook.com">
                    <a target="_blank" className=" cursor-ne-resize">fatihdelice@outlook.com.</a>
                </Link><br />

                <span className="opacity-70">Chat with the community at</span>{" "}
                <Link href="https://discord.gg/TD6DxU95TN">
                    <a target="_blank" className=" cursor-ne-resize">my Discord Server.</a>
                </Link>
            </p>
            <p>
                <span className="opacity-70">If you like my works, you can </span>{" "}
                <Link href="https://www.buymeacoffee.com/fatihdelice">
                    <a target="_blank" className=" cursor-ne-resize">Buy Me a Coffee.</a>
                </Link>
            </p>
            {/* <Link href="mailto:fatihdelice@outlook.com">
            <a
              className={classNames(
                "px-3 py-2 bg-red-500 inline-block text-white inset-x-6 font-bold my-3",
                "rounded-lg hover:shadow-md hover:shadow-red-400/50 ease-in-out hover:translate-x-1 transition-all hover:-rotate-1",
                "dark:bg-red-600 dark:hover:bg-red-600/90 dark:hover:shadow-red-400/10"
              )}
            >
              <span>[HIRE ME]</span>
            </a>
          </Link> */}

        <style jsx>{`
            p {
                margin-top: 30px;
                line-height: 1.75;
                font-size: 1rem;
            }
        `}</style>
        </article>
    );
}


export default About;