import { HStack } from "@chakra-ui/react";
import { ActionFunctionArgs } from "@remix-run/node";
import { parseFormData } from "remix-hook-form";
import { LoginForm } from "../../../widgets/auth/login-form";
import {
  createUserSession,
  LoginSchema,
  validateUser,
} from "../../../features/auth";

export async function action({ request }: ActionFunctionArgs) {
  const userData = await parseFormData<LoginSchema>(request);
  const userId = await validateUser(userData.email, userData.password);

  if (userId) {
    return createUserSession(request, userId);
  }

  return new Response("Unauthorized", { status: 401 });
}

export default function Login() {
  return (
    <HStack justifyContent={"center"} marginY={10}>
      <LoginForm />
    </HStack>
  );
}
