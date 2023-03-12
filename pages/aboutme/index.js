import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Who is Elker?</title>
        <meta name="description" content="Look what I'm about" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("Working.svg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-warning">
              I'm working on it!
            </h1>
            <p className="mb-5 text-accent">
              This page is currently under construction please come back later
              to see the progress
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
