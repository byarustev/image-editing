import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    // Allow signed out users to access the specified routes:
    // publicRoutes: ['/anyone-can-visit-this-route'],
    // Allow public access to api 
    publicRoutes: ['/api/webhooks/clerk']
});

export const config = {
    matcher: [
        "/((?!.+\\.[\\w]+$|_next).*)",
        "/(api|trpc)(.*)"
    ]
};