import Link from 'next/link';
import {
  ArrowIcon,
  GitHubIcon,
  TwitterIcon,
  YoutubeIcon,
  SquareIcon,
  InstagramIcon,
  LinkedInIcon,
  DiscordIcon,
  Buymeacoffee,
  PlayStoreIcon,
} from './icons';
import {
  PROFILE_NAME,
  COMPANY,
  COMPANY_URL,
  SHORT_ABOUT,
  TWITTER_URL,
  GITHUB_URL,
  EMAIL,
  LINKEDIN_URL,
  YOUTUBE_URL,
  INSTAGRAM_URL,
  DISCORD_URL,
  COPYRIGHT,
  PLAY_URL,
} from "../util/strings";

export const revalidate = 60;

export default function Home({ user }) {


  return (
    <article className='w-main-content max-w-full w-full mv-0 mx-auto grid'>
      <h1 className="font-bold text-3xl">{PROFILE_NAME}</h1>
      <p className="my-5 text-neutral-800 dark:text-[#bbb]">
        {SHORT_ABOUT}
      </p>
      <p className="mt-3 text-neutral-800 dark:text-[#bbb] flex">
        Currently working at
        <Link href={COMPANY_URL} className='flex items-center ml-2 jobs-logo gap-[1px] cursor-ne-resize text-white'>
          <SquareIcon />
          {COMPANY}
        </Link>.
      </p>
      <p className="mt-3 text-neutral-800 dark:text-[#bbb]">I love everything that include visuality and aesthetic. I am developing interfaces with popular technologies for mobile and web applications.
      </p>
      <p className="mt-3 text-neutral-800 dark:text-[#bbb]">
        Proficient in HTML, CSS, JavaScript; plus modern libraries and frameworks (Angular.js, Vue.js, React.js, React-Native, Next.js, Tailwind, SASS, Php & Laravel, SAP Hybris Backoffice management, SAP Hybris Hac Management, SAP Hybris Impex Management...). Possess working knowledge of Adobe Photoshop, Figma, Illustrator, Premiere.
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
      <Link
        href="https://www.buymeacoffee.com/fatihdelice"
        className="mt-5 border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4 w-full"
      >
        <span className="grow">
          If you like my works, you can Buy Me a Coffee.
        </span>
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white dark:bg-zinc-600">
          <Buymeacoffee />
        </span>
      </Link>
      <hr className="w-12 my-12 mx-auto border-[#7d7d7d]" />
      <p className="text-neutral-800 dark:text-[#bbb]">Find me on</p>
      <p className="mt-2 social-links gap-3">
        <a href={GITHUB_URL} target="_blank"><GitHubIcon /> GitHub</a>
        <a href={LINKEDIN_URL} target="_blank"><LinkedInIcon /> LinkedIn</a>
        <a href={PLAY_URL} target="_blank"><PlayStoreIcon /> Play Store</a>
        <a href={TWITTER_URL} target="_blank"><TwitterIcon /> Twitter</a>
        <a href={DISCORD_URL} target="_blank"><DiscordIcon /> Discord Server</a>
        <a href={YOUTUBE_URL} target="_blank"><YoutubeIcon></YoutubeIcon> YouTube</a>
        <a href={INSTAGRAM_URL} target="_blank"><InstagramIcon /> Instagram</a>
      </p>

      <div className="copyright mt-12">
        <p className="text-neutral-800 dark:text-[#bbb]">{COPYRIGHT} © 2023</p>
      </div>
    </article >
  );
}