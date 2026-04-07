import { usePlayerStore } from "@/store/usePlayers";
import { useGameStore } from "@/store/useGame";
import { useEffect, useState } from "react";
import { Player } from "@/interface/player";
import perguntas from "@/app/_data/perguntas.json"
import poderes from "@/app/_data/poderes.json"

import imgChegouLa from "@/public/image/chegouLa.webp"

import Image from "next/image";
import imgBaseCerveja from "@/public/image/baseCerveja.jpg";
import { ButtonSecundary } from "@/components/ui/button";

import { BiSolidLike } from "react-icons/bi";
import { ImBlocked } from "react-icons/im";
import { IoReturnUpBackSharp } from "react-icons/io5";

const ScreemInGame = () => {

    type Poder = {
        titulo: string,
        descricao: string,
    }
    const { players, addNSim, addNnao, reset } = usePlayerStore()
    const { setStatus } = useGameStore();

    const [indexVez, setIndexVez] = useState<number>(-1);
    const [vistos, setVistos] = useState<number[]>([]);
    const [textoPergunta, setTextoPergunta] = useState("");
    const [poder, setPoder] = useState<Poder>({ titulo: "", descricao: "" })


    const [isTotalPerguntas, setIsTotalPerguntas] = useState<boolean>(false)

    const [isPoder, setIsPoder] = useState<boolean>(false);


    function isActivePoder() {
        if (Math.random() < 0.02) {
            setIsPoder(true);
        }
    }

    function sortearPoder() {
        if (players == null) return;

        const index = Math.floor(Math.random() * poderes.length);
        return index;
    }

    function sortearVez() {
        if (players == null) return;
        const index = Math.floor(Math.random() * players.length);
        return index;
    }

    function sortearPergunta(_index_vez = -1) {

        let index = -1;
        let id = -1;
        let isProgress = true;
        let tentativa = 0;

        if (perguntas.length === vistos.length) {
            setIsTotalPerguntas(true);
            return;
        }

        do {
            isProgress = true;
            index = Math.floor(Math.random() * perguntas.length);
            id = perguntas[index].id

            if (perguntas[index].sexo == "Todos") {
                isProgress = false;
            } else if (perguntas[index].sexo == players?.[_index_vez]?.sexo && _index_vez != -1) {
                isProgress = false;
            } else if (perguntas[index].sexo == "Outros" && _index_vez != -1) {
                isProgress = false;
            }

            tentativa++;

            if (tentativa == 100) {
                setIsTotalPerguntas(true);
                return;
            }
        } while (vistos.includes(id) && isProgress)

        setVistos([...vistos, id])
        return index;

    }

    function handlexProxEtapa() {

        isActivePoder();

        const index_vez = sortearVez();
        const index_pergunta = sortearPergunta(index_vez);
        if (index_vez == undefined || players == null || index_pergunta == undefined) return;

        setIndexVez(index_vez);
        setTextoPergunta(perguntas[index_pergunta]?.pergunta || '');
    }

    useEffect(() => {
        handlexProxEtapa()
    }, [])

    useEffect(() => {
        if (isPoder) {
            const index_poder = sortearPoder();
            if (index_poder == null) return;
            setPoder({
                titulo: poderes[index_poder]?.titulo,
                descricao: poderes[index_poder]?.descricao,
            })
            return;
        }
    }, [isPoder]);
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-primary">
            <div className="max-w-[600px] min-h-[calc(100vh-2rem)] max-md:min-h-dvh w-full flex flex-col gap-[.5rem]">
                <div className="flex flex-col justify-center items-center w-full h-[120px] max-md:h-[60px] max-sm:text-[40px] bg-neutral-100">
                    <div className={`${isTotalPerguntas ? '!hidden' : ''} w-full flex items-center justify-between gap-[.2rem] text-[16px] max-sm:text-[12px] text-white px-[1.5rem]`}>
                        <p>Quantidade de <span className="uppercase">sim</span>: {players?.[indexVez]?.n_sim}</p>
                        <p>Quantidade de <span className="uppercase">não</span>: {players?.[indexVez]?.n_nao}</p>
                    </div>
                </div>

                <div className="flex-1 flex flex-col gap-[.5rem] items-center justify-center w-full relative px-[1rem]">

                    <button onClick={() => setStatus("CADASTRO")} className="cursor-pointer p-[.2rem_1.5rem] bg-neutral-100 absolute left-[1rem] top-[1rem] z-[999] rounded-[.25rem]">
                        <IoReturnUpBackSharp size={20} className="text-white" />
                    </button>

                    {/** Tela de Pergunta */}
                    <div className={`${isPoder ? '!hidden' : ''} relative z-[2] flex flex-col gap-[.5rem] items-center justify-center w-full`}>
                        <p className="text-[24px] max-md:text-[16px] !uppercase">Atenção!</p>
                        <div className="p-[.2rem_1rem] bg-neutral-100 w-full flex flex-col items-center rounded-[8px]">
                            <p className="text-[42px] max-md:text-[38px] max-sm:text-[32px] text-primary">{players?.[indexVez]?.nome}</p>
                        </div>
                        <p className="p-[.2rem_1rem] border-2 border-neutral-100 rounded-[1rem] text-center">
                            {textoPergunta}
                        </p>
                        <div className="grid grid-cols-2 gap-[.5rem] w-full">
                            <ButtonSecundary onClick={() => {
                                addNSim(indexVez);
                                handlexProxEtapa();
                            }}>
                                Já sim!
                            </ButtonSecundary>

                            <ButtonSecundary onClick={() => {
                                addNnao(indexVez);
                                handlexProxEtapa();
                            }}>
                                Ainda não
                            </ButtonSecundary>
                        </div>
                    </div>

                    {/** Tela de Poderes */}
                    <div className={`${!isPoder ? '!hidden' : ''} relative z-[2] flex flex-col items-center justify-center w-full`}>

                        <h2 className="w-full text-[3rem] max-sm:text-[2rem]">{players?.[indexVez]?.nome}</h2>
                        <div className="w-full flex flex-col gap-[1rem] border-2 border-neutral-100 rounded-[.25rem] p-[1rem]">
                            <h4 className="text-[1.5rem] max-sm:text-[1.3rem] p-[.5rem] w-full bg-neutral-100 text-white text-center rounded-[.25rem]">
                                {poder?.titulo}
                            </h4>
                            <p className="text-[1rem] max-sm:text-[14px] leading-[1.2] text-center">
                                {poder?.descricao}
                            </p>

                            <button
                                onClick={() => {
                                    handlexProxEtapa()
                                    setIsPoder(!isPoder);
                                }
                                }
                                className="text-black bg-white disabled:bg-white/20 p-[.2rem_2rem] rounded-[.25rem] cursor-pointer hover:scale-[1.05] transition-transform duration-200 linear"
                            >
                                Continuar
                            </button>
                        </div>
                    </div>



                    <Image
                        src={imgBaseCerveja}
                        alt="Imagem de uma caneca de cerveja"
                        className="absolute right-[1rem] bottom-[0rem] w-[120px]"
                    />


                    {/** Caso em que todos os Jogadores chegaram a todas as perguntas */}
                    <div className={`${!isTotalPerguntas ? 'opacity-0 invisibled pointer-events-none' : 'opacity-100 visible pointer-events-auto'} transition-all duration-200 linear h-full w-full absolute inset-0 bg-[#F5E6BB] flex flex-col justify-center items-center z-[999] px-[1rem]`}>
                        <Image
                            src={imgChegouLa}
                            alt="Imagem Chegou lá"
                            className="w-full max-w-[160px] h-auto"
                        />
                        <p>Calma ae meu amigo(a)!</p>
                        <p>Você já chegou no limite das perguntas!</p>
                        <button onClick={() => {
                            setIsTotalPerguntas(false)
                            setVistos([]);
                            reset();

                        }} className="bg-neutral-100 text-white p-[.2rem_1.5rem] rounded-[.25rem] mt-[.5rem] cursor-pointer hover:scale-[1.2] transition-transform duration-200 linear">
                            Reiniciar perguntas
                        </button>


                        <div className="mt-[2rem] w-full flex flex-col items-center justify-center">
                            <h6 className="uppercase text-[12px]">Histórico</h6>
                            <ul className="flex flex-col w-full max-w-[300px] max-h-28 h-28 border-2 border-neutral-100 p-[.5rem] overflow-y-auto items-center gap-[.5rem]">
                                {players?.map((value, index) => {
                                    return (
                                        <li className="bg-neutral-100 p-[.5rem_1rem] w-full text-neutral-50 flex flex-col justify-center items-center" key={index}>
                                            {value?.nome}

                                            <span className="w-full bg-neutral-50 my-[.5rem] h-[1px]"></span>

                                            <div className="flex gap-[1rem] items-center justify-between">
                                                <span className="p-[.1rem_.5rem] border-1 border-white flex items-center gap-[8px] bg-green-800 rounded-[.25rem]">
                                                    <BiSolidLike size={14} className="text-white" />
                                                    {value?.n_sim}
                                                </span>

                                                <span className="p-[.1rem_.5rem] border-1 border-white flex items-center gap-[8px] bg-red-800 rounded-[.25rem]">
                                                    <ImBlocked size={14} className="text-white" />
                                                    {value?.n_nao}
                                                </span>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="h-[120px] max-md:h-[80px] bg-neutral-100 flex flex-col justify-center items-center">


                    {/*
                    <button
                        onClick={() => handlexProxEtapa}
                        className="text-black bg-white disabled:bg-white/20 p-[.2rem_2rem] rounded-[.25rem] cursor-pointer hover:scale-[1.1] transition-transform duration-200 linear"
                    >
                        
                    </button>
                    */}
                </div>

            </div>
        </div>
    )
}

export default ScreemInGame;