import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowIcon,
  GitHubIcon,
  TwitterIcon,
  YoutubeIcon,
  JobsIcon,
  InstagramIcon,
  LinkedInIcon,
  DiscordIcon,
} from './icons';
import {
  PROFILE_NAME,
  COMPANY,
  COMPANY_URL,
  SHORT_ABOUT,
  TWITTER_URL,
  GITHUB_USER_NAME,
  GITHUB_URL,
  EMAIL,
  LINKEDIN_URL,
  YOUTUBE_USER_NAME,
  YOUTUBE_URL,
  INSTAGRAM_URL,
  DISCORD_URL,
  COPYRIGHT,

} from "../util/strings";

export const revalidate = 60;

export default function Home({ user }) {


  return (
    <article className='w-main-content max-w-full w-full mv-0 mx-auto grid px-4 text-fluid--1 dark:text-text-4'>
      <h1 className="font-bold text-3xl">{PROFILE_NAME}</h1>
      <p className="my-5 text-neutral-800 dark:text-[#bbb]">
        {SHORT_ABOUT}
      </p>
      <div className="flex items-start md:items-center my-8 flex-col md:flex-row">
        <Image
          alt={PROFILE_NAME}
          className="rounded-full grayscale"
          src={user.avatar_url}
          width={100}
          height={100}
          priority
        />
        <div className="mt-8 md:mt-0 ml-0 md:ml-6 space-y-2 text-neutral-500 dark:text-neutral-400">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={COMPANY_URL}
            className="flex items-center gap-2"
          >
            <JobsIcon />
            {COMPANY}
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={GITHUB_URL}
            className="flex items-center gap-2"
          >
            <GitHubIcon />
            {GITHUB_USER_NAME}
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={YOUTUBE_URL}
            className="flex items-center gap-2"
          >
            <YoutubeIcon />
            {YOUTUBE_USER_NAME}
          </a>
        </div>
      </div>
      <p className="mt-3 text-neutral-800 dark:text-[#bbb]">I love everything that include visuality and aesthetic. I am developing interfaces with popular technologies for mobile and web applications.
      </p>
      <p className="mt-3 text-neutral-800 dark:text-[#bbb]">
        Proficient in HTML, CSS, JavaScript; plus modern libraries and frameworks (Angular.js, Vue.js, React.js, React-Native, Next.js, Tailwind, SASS, Php & Laravel, SAP Hybris Backoffice management, SAP Hybris Hac Management, SAP Hybris Impex Management...). Possess working knowledge of Adobe Photoshop, Figma, Illustrator, Premiere.
      </p>
      <p className="mt-3">
        <span className="text-neutral-800 dark:text-[#bbb]">You can read my articles on </span>{" "}
        <Link href="https://fatihdelice.medium.com/">
          Medium.
        </Link><br />
        <span className="text-neutral-800 dark:text-[#bbb]">If you like my works, you can </span>{" "}
        <Link href="https://www.buymeacoffee.com/fatihdelice">
          Buy Me a Coffee.
        </Link>
      </p>
      <hr className="w-12 my-12 mx-auto border-[#7d7d7d]" />
      <p className="text-neutral-800 dark:text-[#bbb]">Find me on</p>
      <p className="mt-2 social-links gap-3">
        <a href={GITHUB_URL} target="_blank"><GitHubIcon /> GitHub</a>
        <a href={LINKEDIN_URL} target="_blank"><LinkedInIcon /> LinkedIn</a>
        <a href={TWITTER_URL} target="_blank"><TwitterIcon /> Twitter</a>
        <a href={DISCORD_URL} target="_blank"><DiscordIcon /> Discord Server</a>
        <a href={YOUTUBE_URL} target="_blank"><YoutubeIcon></YoutubeIcon> YouTube</a>
        <a href={INSTAGRAM_URL} target="_blank"><InstagramIcon /> Instagram</a>
      </p>


      <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-500 dark:text-neutral-400 list-none">
        <li>
          <a
            className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href={`mailto:${EMAIL}`}
          >
            <ArrowIcon />
            <p className="h-7">send me an e-mail</p>
          </a>
        </li>
      </ul>
      <div className="copyright mt-12">
        <p className="text-neutral-800 dark:text-[#bbb]">{COPYRIGHT} © 2023</p>
      </div>
    </article >
  );
}