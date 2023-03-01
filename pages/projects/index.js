import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

function myFunction() {
  navigator.clipboard.writeText("https://elker54.com/projects");
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Elker's Projects</title>
        <meta name="description" content="Hey, I'm Elker" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Navbar */}
      <main className="bg-main h-screen w-full">
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
              <div className="flex-1 px-2 mx-2 text-4xl">
                <Link href="/">Elker</Link>
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
            <div className="hero min-h-screen">
              <h1>Here are some of my projects</h1>
              <div className="carousel carousel-center p-4 space-x-4 scrollbar-thin bg-neutral rounded-box max-w-screen-xl border-4 border-emerald-500">
                {/* Jellyfin */}
                <div className="carousel-item" id="Jellyfin">
                  <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                      <img
                        src="Jellyfin.png"
                        alt="Jellyfin Icon"
                        className="rounded-xl"
                      />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className="card-title">Jellyfin</h2>
                      <p>
                        I didn't know you could watch <br />
                        linux ISOs? <br /> All totally legal!
                      </p>
                      <div className="card-actions">
                        <button className="btn btn-primary">More Info</button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* TrueNAS */}
                <div className="carousel-item" id="TrueNAS">
                  <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                      <img
                        src="TrueNAS.png"
                        alt="TrueNAS Icon"
                        className="rounded-xl"
                      />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className="card-title">TrueNAS</h2>
                      <p>
                        Simple, but customisable <br /> storage sever for Free?
                        <br /> Why not?
                      </p>
                      <div className="card-actions">
                        <button className="btn btn-primary">More Info</button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Proxmox */}
                <div className="carousel-item min-h-32" id="Proxmox">
                  <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                      <img
                        src="Proxmox.png"
                        alt="Proxmox Icon"
                        className="rounded-xl"
                      />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className="card-title">Proxmox</h2>
                      <p>
                        Open Source Hyperviser <br /> that just works? <br />
                        Yes please!
                      </p>
                      <button className="btn btn-primary">More Info</button>
                    </div>
                  </div>
                </div>
                {/* Uptime Kuma */}
                <div className="carousel-item" id="Uptime">
                  <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                      <img
                        src="Uptime Kuma.png"
                        alt="Uptime Kuma Icon"
                        className="rounded-xl"
                      />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className="card-title">Uptime Kuma</h2>
                      <p>
                        CAN YOU HEAR ME? <br />
                        .......
                        <br /> YES I CAN HEAR YOU
                      </p>
                      <div className="card-actions">
                        <button className="btn btn-primary">More Info</button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Homarr */}
                <div className="carousel-item" id="Homarr">
                  <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                      <img
                        src="Homarr.png"
                        alt="Homarr Icon"
                        className="rounded-xl"
                      />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className="card-title">Homarr</h2>
                      <p>
                        127.0.0.1 <br /> I'm sorry <br /> For nothing!
                      </p>
                      <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Carousel Item 6 */}
                <div className="carousel-item" id="slide6">
                  <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                      <img
                        src="PFP-Square.png"
                        alt="Shoes"
                        className="rounded-xl"
                      />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className="card-title">Shoes!</h2>
                      <p>6. If a dog chews shoes whose shoes does he choose?</p>
                      <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <footer
              id="Footer"
              className="footer footer-center py-2 bg-base-200/50 text-base-content border-t"
            >
              <div>
                <div className="grid grid-flow-col gap-4">
                  <a href="" className="link link-hover"></a>
                  <a
                    href="https://elker.cc/webemail"
                    className="link link-hover"
                  >
                    Contact Me
                  </a>
                  <a href="https://elker.cc/hrzn" className="link link-hover">
                    HRZN
                  </a>
                  <a href="https://" className="link link-hover">
                    Code
                  </a>
                </div>
                <div className="grid grid-flow-col gap-4">
                  <div>
                    <p>Copyright © 2023 - Some rights reserved</p>
                  </div>
                </div>
              </div>
            </footer>
          </div>
          {/* Mobile Menu */}
          <div className="drawer-side">
            <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 border-r bg-base-100/80">
              <li>
                <Link href="/aboutme" className="rounded-md">
                  About Me
                </Link>
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
