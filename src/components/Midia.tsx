import Image from "next/image"

interface PropsMidia{
  source: string,
  type: string
}

export function Midia({source, type}: PropsMidia){

  if(type == 'mov' || type == 'mp4'){
    return (
      <video
        src={source}
        width={592}
        height={280}
        className="aspect-video w-full rounded-lg object-cover"
        controls
      >
      </video>
    )  
  }

  return (
    <Image
      src={source}
      alt=""
      width={592}
      height={280}
      className="aspect-video w-full rounded-lg object-cover"
    />
  )
}