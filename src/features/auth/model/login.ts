import * as zod from "zod";

export const loginSchema = zod.object({
  email: zod.string().toLowerCase().trim().email("Неверная почта"),
  password: zod
    .string()
    .trim()
    .min(1, "Пароль должен быть хотя бы из 1 символа"),
});

export type LoginSchema = zod.infer<typeof loginSchema>;
