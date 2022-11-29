import projects from "../util/projects.jsx";
import Image from "next/image.js";
import classNames from "../util/classNames.jsx";
import Link from "next/link";
import { HiOutlineExternalLink, HiCode } from "react-icons/hi";

const Projects = () => {
  return (
    <div className="mt-6 pt-6 dark:border-white/30  border-t">
      <h1 className="titles">Projects</h1>
      <div className="grid center grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 md:gap-10">
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

                      <HiCode size={19} color="black" />

                    </a>}
                    {project.live && <a
                      href={project.live}
                      target="_blank"
                      className={classNames(
                        " inline shadow bg-white rounded-2xl overflow-hidden p-3",
                        "hover:bg-neutral-100 transition-all"
                      )}>

                      <HiOutlineExternalLink size={19} color="black" />

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
      </div>
    </div>
  );
};

export default Projects;
