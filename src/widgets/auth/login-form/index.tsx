import { zodResolver } from "@hookform/resolvers/zod";
import { RemixFormProvider, useRemixForm } from "remix-hook-form";
import { loginSchema, LoginSchema, SignInForm } from "../../../features/auth";

export function LoginForm() {
  const form = useRemixForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  return (
    <RemixFormProvider {...form}>
      <SignInForm />
    </RemixFormProvider>
  );
}
