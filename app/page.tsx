'use client'

import ScreemHome from "@/app/_screens/ScreemHome";
import ScreemCadastro from "@/app/_screens/ScreemCadastro";
import ScreemInGame from "@/app/_screens/ScreemInGame";

import { useGameStore } from "@/store/useGame";
import ScreemDoacao from "./_screens/ScreemDoacao";

export default function Home() {
  const {status} = useGameStore();

  if(status == "INICIO"){
    return(<ScreemHome />) 
  }
  else if(status == "CADASTRO"){
    return(<ScreemCadastro />)
  }
  else if(status == "IN-GAME"){
    return(<ScreemInGame />)
  }else if(status == "DOACAO"){
    return(<ScreemDoacao />)
  }

  
}
