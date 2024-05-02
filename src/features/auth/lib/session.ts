// import { getUserById } from "@/entities/users";
// import { session } from "@/shared";
//
// export const USER_KEY = "userId";
//
// export async function getSession(request: Request) {
//   const cookie = request.headers.get("Cookie");
//   return await session.getSession(cookie);
// }
//
// export async function createUserSession(request: Request, userId: string) {
//   const sessionInstance = await getSession(request);
//
//   sessionInstance.set(USER_KEY, userId);
//
//   const headers = new Headers();
//   headers.append("Set-Cookie", await session.commitSession(sessionInstance));
//
//   return redirect("/", {
//     headers: {
//       "Set-Cookie": await session.commitSession(sessionInstance),
//     },
//   });
// }
//
// export async function getUserId(request: Request) {
//   const sessionInstance = await getSession(request);
//
//   return sessionInstance.get(USER_KEY);
// }
//
// export async function getUser(request: Request) {
//   const userId = await getUserId(request);
//
//   if (!userId) return null;
//
//   try {
//     return getUserById(userId);
//   } catch (e) {
//     throw logout(request);
//   }
// }
//
// export async function logout(request: Request) {
//   const sessionInstance = await getSession(request);
//
//   sessionInstance.unset(USER_KEY);
//
//   return redirect("/", {
//     headers: {
//       "Set-Cookie": await session.commitSession(sessionInstance),
//     },
//   });
// }
