import { MediaPicker } from "@/components/MediaPicker"
import { Midia } from "@/components/Midia"
import { Ternary } from "@/components/ternary"
import { api } from "@/lib/api"
import { ChevronLeft } from "lucide-react"
import { cookies } from "next/headers"
import Link from "next/link"
interface Params{
  id : string
}

interface PropsRouterDynamic{
  params: Params,
  searchParams: object
}
export default async function MemoryId({params, searchParams}:PropsRouterDynamic){
  const Tokem = cookies().get('Tokem')?.value

  const responseMemory = await api.get(`/memories/${params.id}`,{
    headers:{
      Authorization: `Bearer ${Tokem}`
    }
  })

  const memory = responseMemory.data
  const extentionMidia = memory?.coverUrl.match(/\.([^./\\]+)$/)

  return(
    <div className="flex flex-1 flex-col gap-4 p-8">

      <Link href={'/'} className="flex items-center gap-1 text-sm text-gray-200 hover:text-gray-100 ">
        <ChevronLeft className="h-4 w-4"/>
        Voltar à timeline
      </Link>
      
      <Ternary Condition={memory?.coverUrl}>
        <Midia source={memory.coverUrl} type={extentionMidia && extentionMidia[1]}/>
      </Ternary>
    
      <p className="w-full flex-1 resize-none rounded border-0 bg-transparent p-0 text-lg leading-relaxed text-gray-100 placeholder:text-gray-400 focus:ring-0">
        {memory.content}
      </p>

    </div>
  )
}