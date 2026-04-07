'use client'

import Image from "next/image";
import imgBaseCerveja from "@/public/image/baseCerveja.jpg";
import { ButtonPrimary } from "@/components/ui/button";
import { useGameStore } from "@/store/useGame";


export default function ScreemHome() {
  const {setStatus} = useGameStore()

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-primary">
      <Image
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
    </div>
  );
}
