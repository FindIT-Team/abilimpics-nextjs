import XRegExp from "xregexp";
import * as zod from "zod";

export const registrationSchema = zod
  .object({
    firstName: zod
      .string()
      .trim()
      .regex(XRegExp("^\\p{Cyrillic}+$"), "Используйте кириллицу")
      .min(2, "Слишком короткое имя")
      .max(15, "Слишком длинное имя"),
    lastName: zod
      .string()
      .trim()
      .regex(XRegExp("^\\p{Cyrillic}+$"), "Используйте кириллицу")
      .min(2, "Слишком короткая фамилия")
      .max(15, "Слишком длинная фамилия"),
    patronymic: zod
      .string()
      .trim()
      .max(15, "Слишком длинное отчество")
      .refine(
        (arg) =>
          arg.length > 0 ? XRegExp("^\\p{Cyrillic}+$").test(arg) : true,
        "Используйте кириллицу"
      ),
    email: zod.string().toLowerCase().trim().email("Неверная почта"),
    password: zod
      .string()
      .trim()
      .min(8, "Пароль должен быть хотя бы из 8 символов")
      .max(32, "Слишком длинный пароль")
      .refine(
        (arg) => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{0,}$/.test(arg),
        "Пароль должен иметь хотя бы 1 цифру, 1 заглавную букву, 1 прописную букву, пароль должен состоять из латиницы"
      ),
    confirm: zod.string().trim(),
    consent: zod.boolean().refine((field) => field, "Обязательное поле"),
  })
  .refine(({ password, confirm }) => password === confirm, {
    message: "Пароли не совпадают",
    path: ["confirm"],
  });

export type RegistrationSchema = zod.infer<typeof registrationSchema>;
