import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>404</title>
        <meta name="description" content="Hey, I'm Elker" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("404.svg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content ">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-error">
              Hmmm I can't find that one
            </h1>
            <p className="mb-5 text-warning">
              Maybe you got a bad url or it could be that I messed up! <br /> If
              it should work please let me know on
              <a className="link px-1" href="https://github.com/ELKER54">
                github
              </a>
            </p>
            <a href="/">
              <button className="btn btn-primary">Go Home</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
