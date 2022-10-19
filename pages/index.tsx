import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      {/* HERO SECTION */}
      <section id="hero-section" className="flex justify-between items-center bg-yellow-400 border-y border-black py-10">

        <div className="px-10 space-y-5">
          <h1 className=" text-6xl max-w-xl font-serif "> <span className="underline decoration-black decoration-4">Medium</span> is a place to read, write and connect</h1>
          <h2>It's easy and free to post your thinking on any topic and connect with millions of hearts.</h2>
        </div>
        <div>
          <img
            className="hidden md:inline-flex h-32 lg:h-full"
            src="https://i.ibb.co/gy1QVyJ/medium-logo.png"
          />
        </div>
        
        <div>

        </div>
      </section>

      {/* POSTS */}


      
    </div>
  );
};

export default Home;
