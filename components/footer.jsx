import Link from "next/link";
import classNames from "../util/classNames";

const footer = () => {
  var time = new Date();
  var fullTime = new Intl.DateTimeFormat("en-EN", {
    weekday: "short",
  }).format(time);

  var min =
    ("0" + time.getHours()).slice(-2) +
    ":" +
    ("0" + time.getMinutes()).slice(-2);

  return <>
    <div
      className={classNames(
        "py-4 pl-3 text-xs text-slate-600",
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
      <div className="font-bold">
        Locale: {min} {fullTime}
      </div>
    </div>
  </>;
};

export default footer;
