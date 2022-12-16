import {projects, npmpackages} from "../util/api.jsx";
import Image from "next/image.js";
import classNames from "../util/classNames.jsx";
import Link from "next/link";
import { SiAppstore } from "react-icons/si";
import { FaGooglePlay, FaNpm } from "react-icons/fa";


const Projects = () => {
  return (
    <div className="mt-6 pt-6 dark:border-white/30  border-t">
      <div className="m-auto mb-8">
        <h1 className="titles">Projects</h1>
        <h4 className="opacity-50 mt-2 italic">List of projects that I am proud of</h4>
      </div>
      <h4 className="mt-10 mb-4 font-semibold opacity-60 text-base">Android Apps</h4>
      <div className="grid center grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 md:gap-6 mb-8 py-2">
        {projects.map((project, index) => {
          return (
            <a className="item relative flex items-center opacity-60 hover:opacity-100 transition-all" href={project.live} target="_blank">
              <div className="pt-2 pr-5">
                <div className="text-3xl i-carbon-keyboard">
                  <FaGooglePlay size={36} color="#bbb" />
                </div>
              </div>
              <div className="flex-auto">
                <div className="text-normal font-semibold">{project.name}</div>
                <div className="desc text-sm dark:text-slate-300 font-normal">{project.description}</div>
                <div className="flex">
                  {project.tags.map((tag, index) => {
                    return (
                      <p
                        className={classNames(
                          "mr-1 my-2 px-2 py-1 rounded text-xs font-bold",
                          "bg-slate-300/50 text-slate-900",
                          "dark:bg-slate-500/50 dark:text-slate-300"
                        )}
                        key={index}
                      >
                        {tag}
                      </p>
                    );
                  })}
                </div>
              </div>
            </a>
          );
        })}
      </div>

      <h4 className="mt-10 mb-4 font-semibold opacity-60 text-base">NPM Packages</h4>
      <div className="grid center grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 md:gap-6 mb-8 py-2">
        {npmpackages.map((npm, index) => {
          return (
            <a className="item relative flex items-center opacity-60 hover:opacity-100 transition-all" href={npm.live} target="_blank">
              <div className="pt-2 pr-5">
                <div className="text-3xl i-carbon-keyboard">
                  <FaNpm size={36} color="#bbb" />
                </div>
              </div>
              <div className="flex-auto">
                <div className="text-normal font-semibold">{npm.name}</div>
                <div className="desc text-sm dark:text-slate-300 font-normal">{npm.description}</div>
                <div className="flex">
                  {npm.tags.map((tag, index) => {
                    return (
                      <p
                        className={classNames(
                          "mr-1 my-2 px-2 py-1 rounded text-xs font-bold",
                          "bg-slate-300/50 text-slate-900",
                          "dark:bg-slate-500/50 dark:text-slate-300"
                        )}
                        key={index}
                      >
                        {tag}
                      </p>
                    );
                  })}
                </div>
              </div>
            </a>
          );
        })}
      </div>


      {/* <div className="grid center grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 md:gap-10">
        {projects.map((project, index) => {
          return (
            <div key={index}>
              <div className="">
                <div className="relative saturate-50 hover:drop-shadow  transition-all hover:saturate-100  group ">
                  <Image
                    src={project.image}
                    width={500}
                    quality={100}
                    height={300}
                    loading="eager"
                    className="rounded-xl transition-all  border object-cover"
                    style={{ border: "1px solid #eaeaea" }}
                    alt={project.title}
                  />
                  <div className="absolute flex space-x-3 opacity-0  transition-opacity group-hover:opacity-100 bottom-4 left-2">
                    {project.link && <a
                      href={project.link}
                      target="_blank"
                      className={classNames(
                        " inline shadow bg-white rounded-2xl overflow-hidden p-3",
                        "hover:bg-neutral-200   transition-all"
                      )}>

                      <SiAppstore size={19} color="black" />

                    </a>}
                    {project.live && <a
                      href={project.live}
                      target="_blank"
                      className={classNames(
                        " inline shadow bg-white rounded-2xl overflow-hidden p-3",
                        "hover:bg-neutral-100 transition-all"
                      )}>

                      <FaGooglePlay size={19} color="black" />

                    </a>}
                  </div>
                </div>
                <div>
                  <a href={project.live} target="_blank">

                    <p className="text-lg hover:ml-1 mt-1 transition-all font-bold mb-2">
                      {project.name}
                    </p>

                  </a>

                  <p className="text-neutral-600 dark:text-white/80">
                    {project.description}
                  </p>
                  <div className="flex">
                    {project.tags.map((tag, index) => {
                      return (
                        <p
                          className={classNames(
                            "mr-1 my-2 px-2 py-1 rounded text-xs font-bold",
                            "bg-red-300/50 text-red-900",
                            "dark:bg-red-800/20 dark:text-red-500"
                          )}
                          key={index}
                        >
                          {tag}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div> */}
    </div >
  );
};

export default Projects;
