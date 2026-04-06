import { create } from "zustand";

interface Player {
  nome: string;
  sexo: string;
  avatar: HTMLImageElement | null;
}

interface Players{
    players: Player[] | null
    setPlayer: (_player:Player[]) => void
}

export const usePlayerStore = create<Players>((set)=>({
    players: [],
    setPlayer: (_player:Player[]) => set(()=>{
        return {players: _player}
    })
}))
