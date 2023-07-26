import Link from "next/link";

const error = () => {
  return (
    <main className="flex justify-center">
      <div className="w-full">
        <div className="font-semibold text-left uppercase text-6xl">
          404
        </div>
        <div className="font-normal text-left opacity-80 pt-8 text-xl">
          Nice to meet you!
        </div>

        <div className="mt-12">
          <Link href="/" className="font-mono border-b hover:border-[#bbb] border-[#7d7d7d] text-neutral-800 dark:text-[#bbb] cursor-pointer font-normal text-left text-xl">
            cd ..
          </Link>
        </div>
      </div>
    </main>
  );
};

export default error;
