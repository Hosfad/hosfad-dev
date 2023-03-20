import React from "react";
import { useEffect } from "react";
// @ts-ignore
import heroImage from "../assets/hero-image.png";
// @ts-ignore
import speedImg from "../assets/speed.gif";
// @ts-ignore
import catImg from "../assets/cat.gif";
import { FaAccusoft, FaJava, FaRobot, FaServer } from "react-icons/fa";

import ImgReveal from "./ImgReveal";
import { fadeObserver, slideObserver } from "../Observer";
import ServiceCard from "./ServiceCard";

function Hero() {
  useEffect(() => {
    const hiddenElemnts = document.querySelectorAll(".hide");
    const slideElements = document.querySelectorAll(".left-start");

    hiddenElemnts.forEach((e) => {
      fadeObserver.observe(e);
    });
    slideElements.forEach((e) => {
      slideObserver.observe(e);
    });
  });
  return (
    <>
      <div className="grid max-w-screen-xl mt-20 px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center text-center md:text-left lg:text-left lg:col-span-7">
          <h1 className="text-5xl font-bold">
            Hosfad software <span className="gradient-text">development.</span>
          </h1>
          <h1 className="text-4xl mt-6">Firas aka Hosfad.</h1>
          <h1 className="text-2xl ">
            <span className="gradient-text-green">
              {" "}
              <ImgReveal translateY={-250} src={catImg}>
                Programing
              </ImgReveal>
            </span>{" "}
            &&
            <span className="gradient-text-pink">
              {" "}
              <ImgReveal translateY={-80} startOffset={200} src={speedImg}>
                Automation
              </ImgReveal>
            </span>{" "}
            enthusiast.
          </h1>
          <h1 className="text-2xl mt-4">Reach out to me</h1>
          <h1 className="mt-2">
            Discord :{" "}
            <a
              href="https://discord.com/channels/@me/521609038920941578"
              target="_blank"
            >
              <h2 className="bg-gray6 inline-block font-bold rounded text-bold text-white p-2 shadow-xl">
                Hosfad#1817
              </h2>
            </a>
          </h1>
          <h1 className="mt-2">
            Github : &nbsp;{" "}
            <a href="https://github.com/hosfad" target="_blank">
              <h2 className="bg-gray6 inline-block font-bold rounded text-bold text-white p-2 shadow-xl">
                @Hosfad
              </h2>
            </a>
          </h1>
          <h1 className="mt-2">
            Email : &nbsp;&nbsp;&nbsp;{" "}
            <h2 className="bg-gray6 inline-block font-bold rounded text-bold text-white p-2 shadow-xl">
              Firas@hosfad.dev
            </h2>{" "}
            or{" "}
            <h2 className="bg-gray6 inline-block font-bold rounded text-bold text-white p-2 shadow-xl">
              Firassabea1@outlook.com
            </h2>
          </h1>
        </div>
        <div className="lg:mt-0 lg:col-span-5 lg:flex">
          <img className="ml-28" src={heroImage}></img>
        </div>
      </div>
      {/* About me */}
      <div className="text-center mt-12 snap-proximity">
        <a href="#about" className="no-underline">
          <h2 className="bg-red-500 font-bold inline-block text-bold text-gray7 px-6 py-4 text-6xl shadow-xl">
            About me
          </h2>
          <span className="animate-bounce mt-12 text-5xl block">👇</span>
        </a>
        <div className="hide">
          <h1 className="text-3xl mt-6" id="about">
            Im a 22 year old{" "}
            <span className="gradient-text">Computer science</span> student from{" "}
            <span className="gradient-text-blue">Israel.</span>
            <br></br>
            Currently studying in Madrid,{" "}
            <span className="gradient-text-pink">Spain.</span>
            <br></br>
          </h1>
          <h1 className="mt-4 text-3xl">
            Interests include:
            <span className="text-yellow-700 text-2xl">
              {" "}
              Full-Stack Development
            </span>
            ,
            <span className="text-yellow-600 text-2xl">
              {" "}
              Automation for Games & Websites
            </span>
            ,<br></br>
            <span className="text-yellow-500 text-2xl">
              {" "}
              Revese Engineering
            </span>
            ,<span className="text-yellow-400 text-2xl"> SocialMedia Bots</span>
            ,
            <span className="text-yellow-300 text-2xl">
              {" "}
              Web & SocialMedia Scrapping
            </span>
            ,<span className="text-yellow-200 text-2xl"> Cyper Security</span>
          </h1>
        </div>
      </div>
      {/* My services */}
      <div className="text-center mt-32 snap-proximity">
        <a href="#services" className="no-underline">
          <h2 className="bg-green-500 font-bold inline-block text-bold text-gray7 px-6 py-4 text-6xl shadow-xl">
            My services
          </h2>
        </a>

        <div className="grid grid-cols-1 md:grid-cols-3 p-20 gap-8 text-2xl">
          <div className="list-slide left-start">
            <ServiceCard color="yellow" title="Website development">
              <ul className="text-left text-xl">
              <br></br>
                <h1>- Front end applications</h1>
                <h1>- Back end applications</h1>
                <h1>- Website crawlers</h1>
                <h1>- Website scrappers</h1>
              </ul>
            </ServiceCard>
          </div>

          <div className="list-slide left-start">
            <ServiceCard color="green" title="Social media bots">
              <ul className="text-left text-xl">
                <h1>- Chat bots</h1>
                <h1>- E-commerce bots</h1>
                <h1>
                  - Platforms :<br></br> <span className="text-blue-500">Twitter</span>,{" "}
                  <span className="text-blue-400">Discord</span>,
                  <span className="text-blue-300"> Telegram</span>,{" "}
                  <span className="text-green-500">Whatsapp</span>,
                  <span className="text-pink-500"> Instagram</span>,{" "}
                  <span className="text-blue-600">Facebook</span>,{" "}
                  <span className="gradient-text">etc...</span>
                </h1>
              </ul>
            </ServiceCard>
          </div>
          <div className="list-slide left-start">
            <ServiceCard color="blue" title="OSRS bots">
              <ul className="text-left text-xl">
              <br></br>
                <h1>- Botting scripts</h1>
                <h1>- AHK scripts</h1>
                <h1>- Runelite plugins</h1>
                <h1>- Open OSRS plugins</h1>
              </ul>
            </ServiceCard>
          </div>
        </div>
      </div>
    </>
  );
}

/**
 *  <div className='mt-8 text-center'>
       <h1 className='text-6xl'>Grow your business <span className="gradient-text">faster.</span></h1>
       <h1 className='text-2xl mt-6'><span className="text-yellow-500">Name</span> is a blazing fast && easy way to</h1>
       <h1 className='text-2xl mt-6'>grow your business.</h1>

    </div>
 * 
 */

export default Hero;
