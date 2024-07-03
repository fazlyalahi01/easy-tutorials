import { NextResponse } from 'next/server'
import jwt from "jwt-decode";

// This function can be marked `async` if using `await` inside
const privateRoutes = ['/account'];

export function middleware(request) {
  const token = request.cookies.get('authToken');    

  if (!token && privateRoutes.includes(request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/account',
}