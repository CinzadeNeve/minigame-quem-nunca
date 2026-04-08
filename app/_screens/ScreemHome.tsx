'use client'

import Image from "next/image";
import imgBaseCerveja from "@/public/image/baseCerveja.jpg";
import { ButtonPrimary } from "@/components/ui/button";
import { useGameStore } from "@/store/useGame";

import { FaLinkedin, FaGithubSquare, FaWhatsappSquare  } from "react-icons/fa";
import { ImMail } from "react-icons/im";
import { IoMdMail } from "react-icons/io";


export default function ScreemHome() {
  const {setStatus} = useGameStore()

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-primary relative">
      <Image
        loading="eager"
        src={imgBaseCerveja}
        alt="Imagem de uma caneca de cerveja"
        className="w-[300px] max-md:w-[200px]"
      />
      <h1 className="text-primary-100 text-[2.5rem] max-md:text-[2rem] uppercase">Bora tomar uma?</h1>
      <p className="text-center leading-[1.2] text-[18px] max-md:text-[14px] max-w-[30ch]">
        Jogue agora com seus amigos de bebedeira o famoso jogo "Quem nunca?" 
      </p>

      <ButtonPrimary onClick={() => setStatus("CADASTRO")} >Iniciar Jogo</ButtonPrimary>
      <ButtonPrimary onClick={() => setStatus("DOACAO")} className="!mt-[.5rem]" >Doação</ButtonPrimary>

      <div className="absolute bottom-0 left-0 w-full flex justify-center gap-[.5rem] py-[1rem]">
          <a href="https://www.linkedin.com/in/cl%C3%A1udio-alves-0813101a1/" target="_blank" rel="noopener noreferrer" className="w-fit hover:translate-y-[-6px] transition-all duration-200 linear">
            <FaLinkedin className="text-neutral-100 h-auto w-[26px]" />
          </a>

          <a href="https://github.com/CinzadeNeve" target="_blank" rel="noopener noreferrer" className="w-fit hover:translate-y-[-6px] transition-all duration-200 linear">
            <FaGithubSquare className="text-neutral-100 h-auto w-[26px]" />
          </a>

          <a href="https://wa.me/5584996241610" target="_blank" rel="noopener noreferrer" className="w-fit hover:translate-y-[-6px] transition-all duration-200 linear">
            <FaWhatsappSquare className="text-neutral-100 h-auto w-[26px]" />
          </a>

          <a href="mailto:ticlaudioalves@gmail.com" target="_blank" rel="noopener noreferrer" className="w-fit hover:translate-y-[-6px] transition-all duration-200 linear">
            <IoMdMail className="text-neutral-100 h-auto w-[26px]" />
          </a>

          

          
      </div>
    </div>
  );
}
