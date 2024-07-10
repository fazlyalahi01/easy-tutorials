import { NextResponse } from 'next/server';

// This function can be marked `async` if using `await` inside
const privateRoutes = ['/account', "/enroll-success"];

export function middleware(request) {
  const user = request.cookies.get('auth');    

  if (!user && privateRoutes.includes(request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/account',
}