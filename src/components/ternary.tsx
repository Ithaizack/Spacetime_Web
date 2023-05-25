import React from "react"

interface PropsTernary {
  Condition : any,
  children: React.ReactNode
}
export function Ternary({ Condition , children }:PropsTernary){
  
  if(!!Condition == false){
    return <></>
  }
  if(Condition?.length == 0){
    return <></>
  }
  return(
    <>
      {children}
    </>
  )
}