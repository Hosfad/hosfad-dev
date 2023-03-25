import React, { useEffect } from 'react'
import { fadeObserver, slideObserver } from '../Observer';
// @ts-ignore
import heroImage from "../assets/hero-image.png";
import ServiceCard from '../Components/ServiceCard';
import ImgReveal from '../Components/ImgReveal';
function Empresa() {

    useEffect(() => {
        const hiddenElemnts = document.querySelectorAll(".hide");
        const slideElements = document.querySelectorAll(".left-start");
        hiddenElemnts.forEach((e) => {
          fadeObserver.observe(e);
        });
        slideElements.forEach((e) => {
          slideObserver.observe(e);
        });
    })
  return (
    <>
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto mt-20 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
      <div className="mr-auto text-center place-self-center md:text-left lg:text-left lg:col-span-7">
        <h1 className="text-5xl font-bold">
        Empresa de <span className="gradient-text">Automacion </span> de tareas de
                  <span className="gradient-text-pink"> Redes sociales</span>
        </h1>
        <p className='mt-8 text-xl text-white'>Una startup de tecnología de punta, que se especializa en bots de redes sociales y bots de compras que utilizan las últimas tecnologías GPT.</p>
              <p className='mt-4 text-xl text-white'>Con nuestros chatbots avanzados, nuestro objetivo es revolucionar la forma en que las empresas interactúan con sus clientes en las plataformas de redes sociales</p>

       
      </div>
      <div className="hidden lg:mt-0 md:visable lg:visable lg:col-span-5 lg:flex">
        <img className="ml-28" src={heroImage}></img>
      </div>
    </div>

    {/* About me */}
    <div className="mx-auto mt-12 text-center w-fit snap-proximity">
      <a href="#tech" className="no-underline">
        <h2 className="inline-block px-6 py-4 text-6xl font-bold bg-red-500 shadow-xl text-bold text-gray7">
        Nuestra tecnología
        </h2>
        <span className="block mt-12 text-5xl animate-bounce">👇</span>
      </a>
      <div className="hide w-[80%] mx-auto text-left">
      <p className="mt-6 text-2xl text-white" id="tech">
                      Nuestros bots funcionan con <span className='gradient-text-blue'>GPT</span>, lo que significa que entienden el contexto y se les puede proporcionar información como documentación de la empresa, correos electrónicos y otros datos relevantes para comprender mejor el contexto de lo que hace la empresa.
                  </p>
                  <p className='mt-4 text-2xl text-white '>Esta tecnología permite que nuestros bots brinden un servicio al cliente personalizado y eficiente, asegurándose de que cada interacción con el cliente sea valiosa y productiva.</p>
                  <p className="mt-6 text-2xl text-white"> Tambien es posible usar technologias como <span className='gradient-text'>Whisper</span> para cambiar Voz y Texto en ambos lados para facilitar communicacion de voz con los clientes.</p>

                  <h1 className='mt-8 text-4xl gradient-text-green'>Bots de compras</h1>
                  <p className='mt-4 text-xl text-white'>Los clientes pueden buscar fácilmente productos, comparar precios y completar compras, todo dentro de la interfaz del chatbot.
                      Haciendo lo atraves redes como Instagram, Telegram, Whatsapp, Twitter etc...</p>

      </div>
    </div>


  </>
    
  )
}


export default Empresa