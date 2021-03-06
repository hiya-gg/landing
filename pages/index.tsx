import React from "react";
import { NextSeo } from "next-seo";
import Link from "next/link";
import Logo from "../components/branding/Logo";

const links = [
  {
    label: "twitter.",
    href: "https://twitter.com/ZeriteDev",
  },
  {
    label: "github.",
    href: "https://github.com/Zerite",
  },
  {
    label: "contact.",
    href: "mailto:hello@koding.dev",
  },
];

// noinspection JSUnusedGlobalSymbols
export default function HomePage() {
  return (
    <>
      <NextSeo title="hiya!" description="Hiya.gg is a social platform to connect all your accounts together." />

      <div
        className="flex h-screen w-screen"
        style={{
          background:
            "linear-gradient(90deg, #181818 29px, transparent 1%) center, linear-gradient(#181818 29px, transparent 1%) center, #474747",
          backgroundSize: "30px 30px",
        }}
      >
        <div className="flex flex-col justify-between p-10 md:px-24 md:py-10 text-white h-full w-full">
          <div className="flex flex-row gap-10">
            {links.map((link) => (
              <Link key={link.label} href={link.href} passHref>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="text-neutral-500 hover:text-neutral-300 transition-all" target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              </Link>
            ))}
          </div>

          <div>
            <h1 className="text-7xl font-bold mb-4 hover:scale-[102%] transition-all origin-left">hiya! 👋</h1>
            <h2 className="text-3xl font-medium text-neutral-500 mb-4">let&apos;s connect, together.</h2>
            <p className="text-md text-neutral-700">Coming soon.</p>
          </div>

          <div className="flex">
            <a href="https://zerite.dev" target="_blank" rel="noreferrer">
              <div className="flex flex-row items-center gap-2 transition-all hover:scale-[102%] origin-left group">
                <Logo className="group-hover:rotate-[30deg] transition-all" />

                <div className="flex flex-col">
                  <p className="text-sm text-neutral-600">Copyright &copy; {new Date().getFullYear()}</p>
                  <p className="text-sm font-medium text-neutral-500">Zerite Development</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
