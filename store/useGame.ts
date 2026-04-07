import { create } from "zustand";

interface Game{
    status: string
    setStatus: (status:string) => void
}

export const useGameStore = create<Game>((set, get) => ({
    status: "INICIO",
    setStatus: (_status:string) => set(()=>{

        switch (_status){
            case "INICIO":
                return {status: _status}
            break;
            case "CADASTRO":
                return {status: _status}
            break;
            case "IN-GAME":
                return {status: _status}
            break;
            case "DOACAO":
                return {status: _status}
            break;
            default: 
                return {}
            break;
        }
    })
}))