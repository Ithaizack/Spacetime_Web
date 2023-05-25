'use client'

import { ChangeEvent, use, useState } from "react"
import { Ternary } from "./ternary"

export function MediaPicker(){
  
  const [ExtentMedia,setExtentMedia] = useState<string | null>(null)
  const [StateMedia,setStateMedia] = useState<string | null>(null)

  function GetImagePreviw(event: ChangeEvent<HTMLInputElement>){
    const { files } = event.target

    if(!files){
      return
    }

    const typeMedia = files[0].type

    const PreviwUrl = URL.createObjectURL(files[0])
    if(typeMedia.split('/')[0] == "video"){
      setExtentMedia('video')
    }
    if(typeMedia.split('/')[0] == 'image'){
      setExtentMedia('image')
    }
    setStateMedia(PreviwUrl)
  }


  return(
    <>
      <input name='coverUrl' onChange={GetImagePreviw} type="file" id="media" className="invisible h-0 w-0" />

      <Ternary Condition={StateMedia}>
        {ExtentMedia == 'image' && <img src={StateMedia} accept="image/*" className="w-full aspect-video rounded-lg object-cover" alt="Sua imagem" />}
        {ExtentMedia == 'video' && <video controls src={StateMedia} accept="image/*" className="w-full aspect-video rounded-lg object-cover" alt="Sua imagem"></video>}
      </Ternary>
    </>
  )
}