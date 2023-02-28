import Head from "next/head";
import Footer from "@/Components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Elker</title>
        <meta name="description" content="Hey, I'm Elker" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
              <div className="flex-1 px-2 mx-2 text-4xl">Elker</div>
              <div className="flex-none hidden lg:block text-2xl">
                <ul className="menu menu-horizontal">
                  <li>
                    <a className="rounded-md">About Me</a>
                  </li>
                  <li>
                    <a className="rounded-md">Projects</a>
                  </li>
                </ul>
              </div>
            </div>
            <div id="CONTENT">
              <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                  <img
                    src="https://s.elker54.com/RIZo8/jirEJOKE34/raw.png"
                    className="md:max-w-sm rounded-full border-4"
                  />
                  <div>
                    <div className="md:chat-start">
                      <h1 className="text-5xl font-bold decoration-4 underline chat-bubble pb-4 border-accent border-2">
                        Hey! I'm Elker
                      </h1>
                    </div>
                    <p className="py-3 text-3xl text-">
                      Take a look around my website.
                    </p>

                    <div className="flex gap-2">
                      <a href="https://elker.cc/gh" target="_blank">
                        <button>
                          <i className="fa-brands fa-github text-5xl hover:shadow-black hover:shadow-lg hover:bg-black/50 rounded-xl p-1"></i>
                        </button>
                      </a>
                      <a href="https://elker.cc/wk" target="_blank">
                        <button>
                          <i className="fa-solid fa-timer text-5xl hover:shadow-black hover:shadow-lg hover:bg-black/50 rounded-xl p-1"></i>
                        </button>
                      </a>
                      <a href="https://elker.cc/discord" target="_blank">
                        <button>
                          <i className="fa-brands fa-discord text-5xl hover:shadow-black hover:shadow-lg hover:bg-black/50 rounded-xl p-1"></i>
                        </button>
                      </a>
                      <a href="https://elker.cc/webemail">
                        <button>
                          <i className="fa-regular fa-envelope text-5xl hover:shadow-black hover:shadow-lg hover:bg-black/50 rounded-xl p-1"></i>
                        </button>
                      </a>
                      <i className="fa-solid fa-otter text-5xl rounded-md py-1 px-1 hover:animate-spin"></i>
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
                    <a>
                      <i className="fa-brands fa-discord text-2xl"></i>
                    </a>
                    <a>
                      <i className="fa-brands fa-github text-2xl"></i>
                    </a>
                    <div>
                      <p>Copyright © 2023 - Some rights reserved</p>
                    </div>
                  </div>
                </div>
              </footer>
            </div>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 border-r bg-base-100/80">
              <li>
                <a>About Me</a>
              </li>
              <li>
                <a>Projects</a>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
