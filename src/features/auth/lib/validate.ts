// import bcrypt from "bcryptjs";
// import { getUserByEmail } from "@/entities/users";
//
// export async function validateUser(email: string, password: string) {
//   const user = await getUserByEmail(email, false);
//
//   if (!user || !(await bcrypt.compare(password, user.password))) return null;
//
//   return user.id;
// }
