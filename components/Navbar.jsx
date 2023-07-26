'use client'

import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { LayoutGroup, motion } from 'framer-motion';


const navItems = {
  '/': {
    name: 'home',
  },
  // '/blog': {
  //   name: 'blog',
  // },
  '/projects': {
    name: 'projects',
  },
};

function Logo() {
  return (
    <Link aria-label="Fatih Delice" href="/">
      <motion.svg
        className="text-white"
        width="50"
        height="50"
        viewBox="0 0 663 652"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="126" width="537" height="184" rx="92" fill="white" />
        <rect x="126" width="537" height="184" rx="92" fill="white" />
        <rect x="126" width="537" height="184" rx="92" fill="white" />
        <rect x="190" y="249" width="332" height="173" rx="86.5" fill="white" />
        <rect x="190" y="249" width="332" height="173" rx="86.5" fill="white" />
        <rect x="190" y="249" width="332" height="173" rx="86.5" fill="white" />
        <rect x="126" y="479" width="169" height="173" rx="84.5" fill="white" />
        <rect x="126" y="479" width="169" height="173" rx="84.5" fill="white" />
        <rect x="126" y="479" width="169" height="173" rx="84.5" fill="white" />
        <rect y="249" width="169" height="173" rx="84.5" fill="white" />
        <rect y="249" width="169" height="173" rx="84.5" fill="white" />
        <rect y="249" width="169" height="173" rx="84.5" fill="white" />
      </motion.svg>
    </Link>
  );
}

export default function Navbar() {
  let pathname = usePathname() || '/';
  if (pathname.includes('/blog/')) {
    pathname = '/blog';
  }

  return (
    <aside className="md:w-[150px] md:flex-shrink-0 -mx-4 md:mx-0 md:px-0 md:mb-0 mb-12">
      <div className="lg:sticky lg:top-20">
        <div className="ml-2 md:ml-[12px] mb-2 px-4 md:px-0 md:mb-8 space-y-10 flex flex-col md:flex-row items-start ">
          <Logo />
        </div>
        <LayoutGroup>
          <nav
            className="flex flex-row md:flex-col items-start relative px-4 md:px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
            id="nav"
          >
            <div className="flex flex-row md:flex-col space-x-0 pr-10 mb-2 mt-2 md:mt-0">
              {Object.entries(navItems).map(([path, { name }]) => {
                const isActive = path === pathname;
                return (
                  <Link
                    key={path}
                    href={path}
                    className={clsx(
                      'transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle',
                      {
                        'text-neutral-500': !isActive,
                        'font-bold': isActive,
                      }
                    )}
                  >
                    <span className="relative py-[5px] px-[10px]">
                      {name}
                      {path === pathname ? (
                        <motion.div
                          className="absolute inset-0 bg-neutral-100 dark:bg-neutral-800 rounded-md z-[-1]"
                          layoutId="sidebar"
                          transition={{
                            type: 'spring',
                            stiffness: 350,
                            damping: 30,
                          }}
                        />
                      ) : null}
                    </span>
                  </Link>
                );
              })}
            </div>
          </nav>
        </LayoutGroup>
      </div>
    </aside>
  );
}