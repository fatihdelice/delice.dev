import Link from "next/link";
import classNames from "../util/classNames";

const footer = () => {

  return <>
    <div
      className={classNames(
        "py-4 pl-3 text-xs opacity-80 text-slate-600",
        "sm:pl-10",
        "",
        "dark:text-neutral-300 dark:opacity-40"
      )}
    >
      <div className="">
        This site build with{" "}
        <a href="https://nextjs.org/" target="_blank" className="link">
          Next.Js,
        </a>{" "}
        <a href="https://tailwindcss.com/" target="_blank" className="link">
          Tailwind CSS
        </a>{" "}
        and{" "}
        <a href="https://tailwindcss.com/" target="_blank" className="link">
          Vercel
        </a>{" "}
      </div>
      <div className="">
        You can access the source codes of this website on{" "}
        <a href="https://github.com/fatihdelice/delice.dev" target="_blank" className="link underline">
          Github.
        </a>{" "}
      </div>
    </div>
  </>;
};

export default footer;
