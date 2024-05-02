import { zodResolver } from "@hookform/resolvers/zod";
import { RemixFormProvider, useRemixForm } from "remix-hook-form";
import {
  registrationSchema,
  RegistrationSchema,
  SignUpForm,
} from "../../../features/auth";

export function RegistrationForm() {
  const form = useRemixForm<RegistrationSchema>({
    resolver: zodResolver(registrationSchema),
    mode: "onChange",
  });

  return (
    <RemixFormProvider {...form}>
      <SignUpForm />
    </RemixFormProvider>
  );
}
