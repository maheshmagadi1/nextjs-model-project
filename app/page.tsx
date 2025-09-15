import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1>NextJs Starter Kit</h1>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <p
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        >
          Built with ❤️
        </p>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/mahesh-magadi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://raw.githubusercontent.com/maheshmagadi1/bookie-images/3909a399c87a1400c63c994dd2623e303b93b12a/author.svg"
            alt="Author Pic"
            width={16}
            height={16}
          />
          Visit Author →
        </a>
      </footer>
    </div>
  );
}
