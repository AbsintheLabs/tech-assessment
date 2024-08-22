import Image from "next/image";
import React from "react";
import clsx from "clsx";

type FooterProps = { className?: string };

export const Footer = ({ className }: FooterProps) => {
  return (
    <footer className={clsx("bg-elevation-2-dark text-white p-4", className)}>
      <div className="container mx-auto flex justify-between items-center align-middle">
        <div className="flex space-x-4">
          <div className="p-2  rounded-full bg-elevation-3-dark">
            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <Image
                src="/socials/discord-icon.svg"
                alt="Discord"
                width={24}
                height={24}
                className="hover:opacity-75 align-middle"
              />
            </a>
          </div>

          <div className="p-2 rounded-full bg-elevation-3-dark">
            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
              <Image
                src="/socials/github-icon.svg"
                alt="GitHub"
                width={24}
                height={24}
                className="hover:opacity-75"
              />
            </a>
          </div>
          <div className="p-2 rounded-full bg-elevation-3-dark">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/socials/x-icon.svg"
                alt="GitHub"
                width={24}
                height={24}
                className="hover:opacity-75"
              />
            </a>
          </div>
        </div>

        <span className="max-w-[211px]">
          <Image
            src="/powered-by.svg"
            alt="Powered by Absinthe Labs"
            width={211}
            height={70}
            priority
          />
        </span>

        <span className=" font-normal text-right"></span>
      </div>
    </footer>
  );
};
