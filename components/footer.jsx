import Link from "next/link";
import classNames from "../util/classNames";

const footer = () => {

  return <>
    <div
      className={classNames(
        "py-4 pl-3 text-xs opacity-40 text-slate-600",
        "sm:pl-12",
        "",
        "dark:text-neutral-300"
      )}
    >
      <div className="">
        Build with{" "}
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
    </div>
  </>;
};

export default footer;
