import { HStack } from "@chakra-ui/react";
import { ActionFunctionArgs } from "@remix-run/node";
import { parseFormData } from "remix-hook-form";
import { RegistrationForm } from "../../../widgets/auth";
import { createUserSession, RegistrationSchema } from "../../../features/auth";
import { createUser } from "../../../entities/users";

export async function action({ request }: ActionFunctionArgs) {
  const userData = await parseFormData<RegistrationSchema>(request);

  delete (userData as { confirm?: string }).confirm;
  delete (userData as { consent?: boolean }).consent;

  try {
    const { id: userId } = await createUser(userData);
    return createUserSession(request, userId);
  } catch (e) {
    return new Response("Unprocessable entity", { status: 422 });
  }
}

export default function Registration() {
  return (
    <HStack justifyContent={"center"} marginY={10}>
      <RegistrationForm />
    </HStack>
  );
}
