import { usePlayerStore } from "@/store/usePlayers";
import { useEffect, useState } from "react";
import { Player } from "@/interface/player";
import perguntas from "@/app/_data/perguntas.json"

import imgChegouLa from "@/public/image/chegouLa.webp"

import Image from "next/image";
import imgBaseCerveja from "@/public/image/baseCerveja.jpg";

const ScreemInGame = () => {
    const { players } = usePlayerStore()

    const [vez, setVez] = useState<Player>();
    const [vistos, setVistos] = useState<number[]>([]);
    const [textoPergunta, setTextoPergunta] = useState("");

    const [isTotasPerguntas, setIsTotalPerguntas] = useState<boolean>(false)


    function sortearVez() {
        if (players == null) return;
        const index = Math.floor(Math.random() * players.length);
        return index;
    }

    function sortearPergunta() {

        let index = -1;
        let id = -1;

        if (perguntas.length === vistos.length){
            setIsTotalPerguntas(true);
            return;
        }

        do {
            index = Math.floor(Math.random() * perguntas.length);
            id = perguntas[index].id
        } while (vistos.includes(id))

        setVistos([...vistos, id])
        return index;

    }

    useEffect(() => {
        const index_vez = sortearVez();
        const index_pergunta = sortearPergunta();
        if (index_vez == undefined || players == null || index_pergunta == undefined) return;

        setVez(players[index_vez]);

        setTextoPergunta(perguntas[index_pergunta]?.pergunta || '');


    }, [])
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-primary">
            <div className="max-w-[600px] min-h-[calc(100vh-2rem)] max-md:min-h-dvh w-full flex flex-col gap-[.5rem]">
                <div className="h-[120px] bg-neutral-100">

                </div>

                <div className="flex-1 flex flex-col gap-[.5rem] items-center justify-center w-full relative px-[1rem]">
                    <p className="text-[24px] max-md:text-[16px] !uppercase">Atenção!</p>
                    <div className="p-[.2rem_1rem] bg-neutral-100 w-full flex flex-col items-center rounded-[8px]">
                        <p className="text-[42px] max-md:text-[38px] max-sm:text-[32px] text-primary">{vez?.nome}</p>
                    </div>
                    <p className="p-[.2rem_1rem] border-2 border-neutral-100 rounded-[1rem] text-center">
                        {textoPergunta}
                    </p>


                    <Image
                        src={imgBaseCerveja}
                        alt="Imagem de uma caneca de cerveja"
                        className="absolute right-[1rem] bottom-[0rem] w-[100px] max-md:w-[80px]"
                    />


                    {/** Caso em --- --- --- --- --- */}
                    <div className={`${!isTotasPerguntas ? 'opacity-0 invisibled pointer-events-none':'opacity-100 visible pointer-events-auto'} transition-all duration-200 linear h-full w-full absolute inset-0 bg-[#F5E6BB] flex flex-col justify-center items-center`}>
                        <Image
                            src={imgChegouLa}
                            alt="Imagem Chegou lá"
                            className="w-full max-w-[240px] max-md:max-w-[120px] h-auto"
                        />
                        <p>Calma ae meu amigo(a)!</p>
                        <p>Você já chegou no limite das perguntas!</p>
                        <button onClick={()=>{
                            setIsTotalPerguntas(false)
                            setVistos([]);
                        }} className="bg-neutral-100 text-white p-[.2rem_1.5rem] rounded-[.25rem] mt-[.5rem] cursor-pointer hover:scale-[1.2] transition-transform duration-200 linear">
                            Reiniciar perguntas
                        </button>
                    </div>
                </div>

                <div className="h-[120px] bg-neutral-100 flex flex-col justify-center items-center">
                    <button
                        onClick={() => {
                            const index_vez = sortearVez();
                            const index_pergunta = sortearPergunta();
                            if (index_vez == undefined || players == null || index_pergunta == undefined) return;

                            setVez(players[index_vez]);

                            setTextoPergunta(perguntas[index_pergunta]?.pergunta || '');

                        }}
                        className="text-black bg-white disabled:bg-white/20 p-[.2rem_2rem] rounded-[.25rem] cursor-pointer hover:scale-[1.2] transition-transform duration-200 linear"
                    >
                        Sortear jogador(a)
                    </button>
                </div>

            </div>
        </div>
    )
}

export default ScreemInGame;