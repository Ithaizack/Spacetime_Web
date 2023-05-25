import { ArrowRight } from "lucide-react"
import Link from "next/link"
import dayjs from "dayjs";
import ptBR from "dayjs/locale/pt-br"
import { Midia } from "./Midia";

dayjs.locale(ptBR)

interface ListMemories{
  id: string,
  coverUrl: string,
  excerpt: string,
  createdAt: string
}

interface PropsList {
  ListMemories: ListMemories[]
}

export function ListMemory({ListMemories}: PropsList){

  return(
    <div className="flex flex-col gap-10 p-8">
      {ListMemories.map((memory) => {

        const extentionMidia = memory.coverUrl.match(/\.([^./\\]+)$/)

        return (
          <div key={memory.id} className="space-y-4">
            <time className="-ml-8 flex items-center gap-2 text-sm text-gray-100 before:h-px before:w-5 before:bg-gray-50">
              {dayjs(memory.createdAt).format('D[ de ]MMMM[, ]YYYY')}
            </time>
            {extentionMidia ? 
              <Midia source={memory.coverUrl} type={extentionMidia[1]}/> 
              :
              <></>
            }
            <p className="text-lg leading-relaxed text-gray-100">
              {memory.excerpt}
            </p>
            <Link
              href={`/Memories/${memory.id}`}
              className="flex items-center gap-2 text-sm text-gray-200 hover:text-gray-100"
            >
              Ler mais
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )
      })}
    </div>
  )

}