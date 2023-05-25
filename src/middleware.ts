import { NextRequest, NextResponse } from "next/server";

const SingInGithubURL = `https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`

export default function Middleware(request: NextRequest){
  const Tokem = request.cookies.get('Tokem')?.value

  if(!Tokem){
    return NextResponse.redirect(SingInGithubURL,{
      headers:{
        'Set-Cookie': `redirectTo=${request.url}; Path=/; HttpOnly; max-age=50};`
      }
    })
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/Memories/:path*'
}