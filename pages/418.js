import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Error 418</title>
        <meta name="description" content="Hey, I'm Elker" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("418.svg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content ">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-error">418</h1>
            <p className="mb-5 text-warning">HTTP Error 418: Not A Teapot</p>
            <a href="/">
              <button className="btn btn-primary">Go Home</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
