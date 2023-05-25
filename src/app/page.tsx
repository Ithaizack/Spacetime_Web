import { EmptyMemories } from "@/components/EmptyMemories";
import { ListMemory } from "@/components/ListMemory";
import { api } from "@/lib/api";
import { cookies } from "next/headers";

export default async function Home() {

  const Tokem = cookies().get('Tokem')?.value
  const requestMemories = await api.get('/memories',{
    headers: {
      Authorization: `Bearer ${Tokem}`  
    }
  }).catch(err=>{
    return {
      data: []
    }
  })
  
  if(requestMemories?.data.length == 0){
    return (<EmptyMemories/>)
  }
  return (
    <ListMemory ListMemories={requestMemories.data}/>
  )
}
