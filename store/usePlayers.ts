import { create } from "zustand";
import { Player } from "@/interface/player";

interface Players{
    players: Player[] | null
    setPlayer: (_player:Player[]) => void
    addNSim: (index: number) => void;
    addNnao: (index: number) => void;
}

export const usePlayerStore = create<Players>((set)=>({
    players: [],
    setPlayer: (_player:Player[]) => set(()=>{
        return {players: _player}
    }),
     addNSim: (index: number) =>
        set((state) => {

            if(state.players == null) return {};

            const updated = [...state.players];
            updated[index] = {
                ...updated[index],
                n_sim: updated[index].n_sim + 1,
            };
            return { players: updated };
        }),

    addNnao: (index: number) =>
        set((state) => {
            if(state.players == null) return {};
            
            const updated = [...state.players];
            updated[index] = {
                ...updated[index],
                n_nao: updated[index].n_nao + 1,
            };
            return { players: updated };
        }),
}))
