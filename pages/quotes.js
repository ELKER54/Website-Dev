import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Quotes</title>
        <meta name="description" content="Hey, I'm Elker" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Navbar */}
      <main className="bg-main h-w-full">
        <div className="drawer">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col">
            <div className="w-full navbar border-b bg-base-100/70 ">
              <div className="flex-none lg:hidden">
                <label
                  htmlFor="my-drawer-3"
                  className="btn btn-square btn-ghost"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-6 h-6 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>
              </div>
              <div className="flex place-content-center"></div>
              <div className="flex px-2 mx-2 text-4xl">
                <Link href="/">
                  <i className="fa-solid fa-house"></i>
                </Link>
              </div>
              <div className="flex-1 px-2 mx-2 text-4xl flex justify-center">
                <div className="pl-44">
                  <h1>Some of my favourite quotes from DHMIS</h1>
                </div>
              </div>

              <div className="flex-none hidden lg:block text-2xl">
                <ul className="menu menu-horizontal">
                  <li>
                    <Link href="/aboutme" className="rounded-md">
                      About Me
                    </Link>
                  </li>
                  <li>
                    <Link href="/projects#Proxmox" className="rounded-md">
                      Projects
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* Page Content */}
            <div>
              <div className="hero">
                <div className="hero-content text-center p-52">
                  <div className="max-w-lg grid gap-1 underline text-xl text-accent rounded-md border-4 border-info bg-base-200/50 ">
                    <h1>Can I have a touch on the of the clipboard? NO!</h1>
                    <h1>An old man died</h1>
                    <h1>Oh look, there's Mr Bladder in the basement</h1>
                    <h1>Ok Stop.</h1>
                    <h1>It's half past nine, there's fish everywhere.</h1>
                    <h1>There's a time and a place for mucking around.</h1>
                    <h1>Yes Sir. I'm pathetic</h1>
                    <h1>Brain Friends. It's your Brian Friends</h1>
                    <h1>I don't like my window</h1>
                    <h1>No Hovris, this is my water.</h1>
                    <h1>Does your friend have a worm in his brain?</h1>
                    <h1>Ok fine. BYE!</h1>
                  </div>
                </div>
              </div>
              <footer className="footer footer-center py-1 bg-base-200/50 text-base-content border-t ">
                <div>
                  <div className="grid grid-flow-col gap-4">
                    <a
                      href="https://elker.cc/webemail"
                      className="link link-hover"
                    >
                      Contact Me
                    </a>
                    <a href="https://elker.cc/hrzn" className="link link-hover">
                      HRZN
                    </a>
                    <a
                      href="https://github.com/ELKER54"
                      className="link link-hover"
                    >
                      Code
                    </a>
                    <a href="/404" className="link link-hover">
                      404
                    </a>
                    <a href="https://wiki.km27.uk" className="link link-hover">
                      Wiki
                    </a>
                    <Link href="/aboutme" className="link link-hover">
                      About Me
                    </Link>
                    <Link href="/quotes" className="link link-hover">
                      Quotes
                    </Link>
                  </div>
                  <div className="grid grid-flow-col gap-4">
                    <div>
                      <p>Copyright © 2023 - Some rights reserved</p>
                    </div>
                  </div>
                </div>
              </footer>
            </div>
          </div>
          {/* Mobile Menu */}
          <div className="drawer-side">
            <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 border-r bg-base-100/80">
              <li>
                <Link href="/aboutme">About Me</Link>
              </li>
              <li>
                <a href="/projects#Proxmox">Projects</a>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
