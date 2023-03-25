import React from "react";
import { useEffect } from "react";
// @ts-ignore
import heroImage from "../assets/hero-image.png";
// @ts-ignore
import speedImg from "../assets/speed.gif";
// @ts-ignore
import catImg from "../assets/cat.gif";
// @ts-ignore
import crazyCatImg from "../assets/crazy-cat.gif";
import { FaAccusoft, FaJava, FaRobot, FaServer } from "react-icons/fa";

import ImgReveal from "./ImgReveal";
import { fadeObserver, slideObserver } from "../Observer";
import ServiceCard from "./ServiceCard";
import Gopher from "./Gopher";

function Hero() {
  const dateOfBirth = new Date("2000-07-27");
  const currentAge = Date.now() - dateOfBirth.getTime();
  const age = new Date(currentAge).getFullYear() - 1970;
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
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto mt-20 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto text-center place-self-center md:text-left lg:text-left lg:col-span-7">
          <h1 className="text-5xl font-bold">
            Hosfad software <span className="gradient-text">development.</span>
          </h1>
          <h1 className="mt-6 text-4xl">Firas aka Hosfad.</h1>
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
          <h1 className="mt-4 text-2xl">Reach out to me:</h1>
          <h1 className="mt-2">
            Discord :{" "}
            <a
              href="https://discord.com/channels/@me/521609038920941578"
              target="_blank"
            >
              <h2 className="inline-block p-2 font-bold text-white rounded shadow-xl bg-gray6 text-bold">
                Hosfad#1817
              </h2>
            </a>
          </h1>
          <h1 className="mt-2">
            Github : &nbsp;{" "}
            <a href="https://github.com/hosfad" target="_blank">
              <h2 className="inline-block p-2 font-bold text-white rounded shadow-xl bg-gray6 text-bold">
                @Hosfad
              </h2>
            </a>
          </h1>
          <h1 className="mt-2">
            Email : &nbsp;&nbsp;&nbsp;{" "}
            <h2 className="inline-block p-2 font-bold text-white rounded shadow-xl bg-gray6 text-bold">
              <a href="mailto:Firas@hosfad.dev?subject=Hosfad development">
                Firas@hosfad.dev
              </a>
            </h2>{" "}
            or{" "}
            <h2 className="inline-block p-2 font-bold text-white rounded shadow-xl bg-gray6 text-bold">
              <a href="mailto:Firassabea1@outlook.com?subject=Hosfad development">
                Firassabea1@outlook.com
              </a>
            </h2>
          </h1>
        </div>
        <div className="hidden lg:mt-0 md:visable lg:visable lg:col-span-5 lg:flex">
          <img className="ml-28" src={heroImage}></img>
        </div>
      </div>

      {/* About me */}
      <div className="mx-auto mt-12 text-center w-fit snap-proximity">
        <a href="#about" className="no-underline">
          <h2 className="inline-block px-6 py-4 text-6xl font-bold bg-red-500 shadow-xl text-bold text-gray7">
            About me
          </h2>
          <span className="block mt-12 text-5xl animate-bounce">👇</span>
        </a>
        <div className="hide">
          <h1 className="mt-6 text-3xl" id="about">
            Im a {age} year old{" "}
            <span className="gradient-text">
              <ImgReveal startOffset={50} translateY={-350} src={crazyCatImg}>Computer science</ImgReveal>
              </span> student from{" "}
            <span className="gradient-text-blue">Israel.</span>
            <br></br>
            Currently studying in Madrid,{" "}
            <span className="gradient-text-pink">Spain.</span>
            <br></br>
          </h1>
          <h1 className="mt-4 text-3xl">
            Interests include:
            <span className="text-2xl text-yellow-700">
              {" "}
              Full-Stack Development
            </span>
            ,
            <span className="text-2xl text-yellow-600">
              {" "}
              Automation for Games & Websites
            </span>
            ,<br></br>
            <span className="text-2xl text-yellow-500">
              {" "}
              Revese Engineering
            </span>
            ,<span className="text-2xl text-yellow-400"> SocialMedia Bots</span>
            ,
            <span className="text-2xl text-yellow-300">
              {" "}
              Web & SocialMedia Scrapping
            </span>
            ,<span className="text-2xl text-yellow-200"> Cyper Security</span>
          </h1>
        </div>
      </div>
      {/* My services */}
      <div className="mt-32 text-center snap-proximity">
        <a href="#services" className="no-underline">
          <h2 className="inline-block px-6 py-4 text-6xl font-bold bg-green-500 shadow-xl text-bold text-gray7">
            My services
          </h2>
        </a>

        <div className="grid grid-cols-1 gap-8 p-20 text-2xl md:grid-cols-3">
          <div className="list-slide left-start" id="services">
            <ServiceCard color="red" title="Website development">
              <ul className="text-xl text-left">
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
              <ul className="text-xl text-left">
                <h1>- Chat bots</h1>
                <h1>- E-commerce bots</h1>
                <h1>
                  - Platforms :<br></br>{" "}
                  <span className="text-blue-500">Twitter</span>,{" "}
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
              <ul className="text-xl text-left">
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

export default Hero;
