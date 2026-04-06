"use client";

import { ButtonPrimary } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { FaUserPlus } from "react-icons/fa6";
import { TiDelete } from "react-icons/ti";
import { IoMdMale, IoMdFemale } from "react-icons/io";
import { FaQuestion } from "react-icons/fa6";
import { usePlayerStore } from "@/store/usePlayers";

export default function Home() {
  const { setPlayer } = usePlayerStore();

  type Player = {
    nome: string;
    sexo: string;
    avatar: HTMLImageElement | null;
  };

  const [players, setPlayers] = useState<Player[]>([]);
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const [playerName, setPlayerName] = useState<string>("");
  const [playerSexo, setPlayerSexo] = useState<string>("");
  const [disabledInit, setDisabledInit] = useState<boolean>(false);

  useEffect(() => {
    if (players.length > 1) {
      setDisabledInit(true);
    }
  }, [players]);

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-primary">
      <div className="max-w-[600px] min-h-[calc(100vh-2rem)] w-full flex flex-col gap-[.5rem]">
        <p className="bg-black p-[1.2rem] rounded-[.25rem] text-white text-center leading-[1.2] text-[18px] max-md:text-[14px]">
          Para damos inicio ao jogo, precisamos que cadastre os jogadores que
          irão participar.
        </p>

        {/** Usuários cadastrados */}
        <div className="flex-1 flex flex-col justify-center items-center relative">
          {players.length > 0 ? (
            <ul className="flex flex-col gap-[.5rem] w-full">
              {players.map((player, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center relative bg-neutral-100 text-white p-[.8rem] rounded-[.25rem] text-center"
                >
                  <div className="flex items-center gap-[.5rem]">
                    {player.sexo == "Masculino" ? (
                      <IoMdMale size={20} className="text-white" />
                    ) : player.sexo == "Feminino" ? (
                      <IoMdFemale size={20} className="text-white" />
                    ) : (
                      <FaQuestion size={20} className="text-white" />
                    )}
                  </div>

                  {player.nome}

                  <button
                    onClick={() => {
                      const novo = players.filter(
                        (p) => p.nome !== player.nome,
                      );
                      setPlayers(novo);
                    }}
                    className="cursor-pointer hover:scale-[1.2] transition-transform duration-200 linear"
                  >
                    <TiDelete size={24} />
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center text-gray-500">
              Nenhum jogador cadastrado.
            </p>
          )}

          <form
            onSubmit={(e) => {
              e.preventDefault();

              const novoPlayer = {
                nome: playerName,
                sexo: playerSexo,
                avatar: null,
              };

              setPlayers([...players, novoPlayer]);

              setPlayerName("");
              setPlayerSexo("");
              setIsFormOpen(false);
            }}
            className={`${!isFormOpen ? "invisible pointer-events-none opacity-0" : "visible pointer-events-all opacity-100"} p-[2.5rem] flex flex-col gap-[1.5rem] justify-center items-center absolute h-full w-full bg-black inset-0 z-[2] transition-opacity duration-200 linear`}
          >
            <div className="flex flex-col gap-[.3rem] w-full">
              <label htmlFor="playerName" className="text-white">
                Nome do Jogador(a)
              </label>
              <input
                id="playerName"
                type="text"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
                className="bg-neutral-100 text-white placeholder:text-gray-500 border border-gray-300 focus:ring-2 focus:ring-white focus:outline-none"
                placeholder="Digite o nome do jogador(a)..."
              />
            </div>

            <div className="flex flex-col gap-[.3rem] w-full">
              <label htmlFor="playerSexo" className="text-white">
                Sexo
              </label>
              <select
                id="playerSexo"
                className="bg-neutral-100 text-white placeholder:text-gray-500 border border-gray-300 focus:ring-2 focus:ring-white focus:outline-none"
                value={playerSexo}
                onChange={(e) => setPlayerSexo(e.target.value)}
              >
                <option value="" disabled hidden>
                  Selecione o sexo
                </option>
                <option className="!font-carter-one" value={"Masculino"}>
                  Masculino
                </option>
                <option className="font-carter-one" value={"Feminino"}>
                  Feminino
                </option>
                <option className="font-carter-one" value={"Outro"}>
                  Outro
                </option>
              </select>
            </div>

            <button
              type="submit"
              className="cursor-pointer p-[.2rem_1.5rem] flex flex-col justify-center items-center bg-white rounded-[20px] hover:scale-[1.1] focus-visible:scale-[1.1] transition-transform duration-[.3s]"
            >
              Adicionar Jogador(a)
            </button>
          </form>
        </div>

        <div className="bg-black h-[120px] relative p-[.5rem] flex flex-col gap-[.5rem] justify-center items-center">
          <button
            onClick={() => setIsFormOpen(!isFormOpen)}
            className="cursor-pointer h-[45px] w-[45px] flex flex-col justify-center items-center bg-white rounded-[50%] hover:scale-[1.1] focus-visible:scale-[1.1] transition-transform duration-[.3s]"
          >
            <FaUserPlus className="text-neutral-100" size={20} />
          </button>

          <button
            disabled={!disabledInit}
            onClick={() => setPlayer(players)}
            className="text-black bg-white disabled:bg-white/20 p-[.2rem_2rem] rounded-[.5rem] cursor-pointer"
          >
            Iniciar
          </button>
        </div>
      </div>
    </div>
  );
}
