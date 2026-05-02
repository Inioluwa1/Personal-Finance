import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function proxy(request: NextRequest){
  const token = request.cookies.get("token")

  const isAuthPage = 
    request.nextUrl.pathname === "/Login" ||
    request.nextUrl.pathname === "/Signup";

  const isDashboardRoute = request.nextUrl.pathname.startsWith("/Dashboard")

  if(!token && isDashboardRoute){
    return NextResponse.redirect(new URL("/Login", request.url))
  }

  if(token && isAuthPage){
    return NextResponse.redirect(new URL("/Dashboard", request.url))
  }
  
  return NextResponse.next()
}
