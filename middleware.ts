import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    '/',
    '/events/:id',
    '/api/webhook/clerk',
    '/api/webhook/stripe',
    '/api/uploadthing',
    '/assets/images/logo.svg',
    "/assets/images/hero.png",
    "/assets/images/dotted-pattern.png",
    'fabicon.ico',
    '/sign-in'
  ],
  ignoredRoutes: [
    '/api/webhook/clerk',
    '/api/webhook/stripe',
    '/api/uploadthing',
    '/assets/images/logo.svg',
    "/assets/images/hero.png",
    "/assets/images/dotted-pattern.png",
    '/fabicon.ico',
    '/sign-in'
  ]
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};