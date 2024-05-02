// import { createCookieSessionStorage, SessionStorage } from "@remix-run/node";
// import invariant from "tiny-invariant";
// import { serverOnly$ } from "vite-env-only";
//
// export let session: SessionStorage;
//
// if (serverOnly$(() => {})) {
//   serverOnly$(() =>
//     invariant(process.env.SESSION_SECRET, "SESSION_SECRET must be set")
//   )!();
//
//   session = serverOnly$(() =>
//     createCookieSessionStorage({
//       cookie: {
//         name: "token",
//         sameSite: "lax", // this helps with CSRF
//         path: "/", // remember to add this so the cookie will work in all routes
//         maxAge: 1000 * 60 * 60 * 24 * 365, // 365 days
//         httpOnly: true, // for security reasons, make this cookie http only
//         secrets: [process.env.SESSION_SECRET ?? ""], // replace this with an actual secret
//         // secure: process.env.NODE_ENV === "production", // enable this in prod only
//         domain: "findit.test",
//       },
//     })
//   )!();
// }
