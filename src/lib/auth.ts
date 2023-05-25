import { cookies } from "next/headers";
import decode from 'jwt-decode'

interface User {
  name: string,
  avatarUrl: string,
  sub: string
}

export function getUser():User{
  const Tokem = cookies().get('Tokem')?.value

  if(!Tokem){
    throw new Error('Unauthenticated.')
  }

  const User:User = decode(Tokem)

  return User
}