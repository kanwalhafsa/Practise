// import { clerkMiddleware } from '@clerk/nextjs/server'

// export default clerkMiddleware()

// export const config = {
//   matcher: [
//     // Skip Next.js internals and all static files, unless found in search params
//     '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
//     // Always run for API routes
//     '/(api|trpc)(.*)',
//   ],
// import { NextResponse } from "next/server"
// import type { NextRequest } from "next/server"
// import { clerkMiddleware, createClerkClient } from "@clerk/nextjs/server"

// const publicPaths = ["/", "/sign-in", "/join-us"]

// function isPublic(path: string) {
//   return publicPaths.find((x) => path.startsWith(x))
// }

// export default clerkMiddleware((request: NextRequest) => {
//   if (isPublic(request.nextUrl.pathname)) {
//     return NextResponse.next()
//   }

//   // If the user is not signed in and the route is not public, redirect them to the sign-in page.
//   const { userId } = createClerkClient().authenticateRequest(request)
//   if (!userId) {
//     const signInUrl = new URL("/sign-in", request.url)
//     signInUrl.searchParams.set("redirect_url", request.url)
//     return NextResponse.redirect(signInUrl)
//   }

//   return NextResponse.next()
// })

// export const config = {
//   matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
// }

// import { NextResponse } from "next/server"
// import type { NextRequest } from "next/server"
// import { clerkMiddleware, createClerkClient } from "@clerk/nextjs/server"

// const publicPaths = ["/", "/sign-in", "/join-us"]

// function isPublic(path: string) {
//   return publicPaths.find((x) => path.startsWith(x))
// }

// export default clerkMiddleware((request: NextRequest) => {
//   if (isPublic(request.nextUrl.pathname)) {
//     return NextResponse.next()
//   }

//   // If the user is not signed in and the route is not public, redirect them to the sign-in page.
//   const { userId } = createClerkClient().authenticateRequest(request)
//   if (!userId) {
//     const signInUrl = new URL("/sign-in", request.url)
//     signInUrl.searchParams.set("redirect_url", request.url)
//     return NextResponse.redirect(signInUrl)
//   }

//   return NextResponse.next()
// })

// export const config = {
//   matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
// }

import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};