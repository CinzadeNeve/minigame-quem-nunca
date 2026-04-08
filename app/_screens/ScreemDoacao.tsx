"use client";

import Image from "next/image";
import { ButtonPrimary } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { FaUserPlus } from "react-icons/fa6";
import { TiDelete } from "react-icons/ti";
import { IoMdMale, IoMdFemale } from "react-icons/io";
import { FaQuestion } from "react-icons/fa6";
import { usePlayerStore } from "@/store/usePlayers";
import { useGameStore } from "@/store/useGame";
import imgUrsoMendigando from "@/public/image/exausto-urso-mendigando.gif"
import imgPix from "@/public/image/pix-jose-claudio-alves-sobrinho.jpeg"

import { IoReturnUpBackSharp } from "react-icons/io5";

export default function ScreemDoacao() {
    const { setPlayer } = usePlayerStore();
    const { setStatus } = useGameStore();

    const [copiado, setCopiado] = useState(false);

    const chavePix = "00020126580014BR.GOV.BCB.PIX0136a69bf981-7031-4078-abb9-930ab23a2dfe5204000053039865802BR5925Jose Claudio Alves Sobrin6009SAO PAULO62140510UVkQi6OoQe63040287";

    const copiarPix = async () => {
        try {
            await navigator.clipboard.writeText(chavePix);
            setCopiado(true);

            setTimeout(() => setCopiado(false), 2000);
        } catch (err) {
            console.error("Erro ao copiar:", err);
        }
    };


    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-primary">
            <div className="max-w-[600px] min-h-[calc(100vh-2rem)] h-[calc(100vh-2rem)] max-md:min-h-dvh max-md:h-dvh w-full flex flex-col gap-[.5rem]">
                <p className="bg-black p-[1.2rem] rounded-[.25rem] text-white text-center leading-[1.2] text-[32px] max-md:text-[18px]">
                    Doação
                </p>

                {/** Usuários cadastrados */}
                <div className="flex-1 flex flex-col justify-center items-center relative px-[1rem] overflow-hidden">

                    <button onClick={() => setStatus("INICIO")} className="cursor-pointer p-[.2rem_1.5rem] bg-neutral-100 absolute left-[1rem] top-[1rem] z-[999] rounded-[.25rem]">
                        <IoReturnUpBackSharp size={20} className="text-white" />
                    </button>

                    <Image loading="eager" src={imgUrsoMendigando} alt="Urso mendigando" className="max-w-[280px] w-full" />
                    <p className="text-center leading-[1.1] mt-[2rem]">Aceitamos doações de qualquer quantia para insentivar o programador a tomar café e não entrar no mundo da prostituição.</p>
                    <Image loading="eager" src={imgPix} alt="Doação via Pix - José Cláudio Alves Sobrinho" className="max-w-[120px] w-full mt-[1rem]" />
                </div>

                <div className="bg-black h-[120px] relative p-[.5rem] flex flex-col gap-[.5rem] justify-center items-center">
                    <button
                        onClick={copiarPix}
                        className="bg-green-500 text-white cursor-pointer p-[.3rem_2rem] w-[200px] rounded-lg hover:bg-green-600 transition"
                    >
                        {copiado ? "Copiado!" : "Copiar PIX"}
                    </button>
                </div>
            </div>
        </div>
    );
}
