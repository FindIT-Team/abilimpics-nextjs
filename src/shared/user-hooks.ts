// import { UserDto } from "@/entities/users";
//
// export function useOptionalUser() {
//   const matches = useMatches();
//   return (
//     matches.find((match) => match.id === "root")?.data as { user?: UserDto }
//   ).user;
// }
//
// export function useRequireUser() {
//   const user = useOptionalUser();
//   const navigate = useNavigate();
//
//   if (!user) navigate("/login");
//
//   return user;
// }
