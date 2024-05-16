import XRegExp from "xregexp";
import { z } from "zod";

export const registerSchema = z
    .object({
        firstName: z
            .string()
            .trim()
            .regex(XRegExp("^\\p{Cyrillic}+$"), "Используйте кириллицу")
            .min(2, "Слишком короткое имя")
            .max(15, "Слишком длинное имя"),
        lastName: z
            .string()
            .trim()
            .regex(XRegExp("^\\p{Cyrillic}+$"), "Используйте кириллицу")
            .min(2, "Слишком короткая фамилия")
            .max(15, "Слишком длинная фамилия"),
        patronymic: z
            .string()
            .trim()
            .max(15, "Слишком длинное отчество")
            .refine(
                (arg: string) =>
                    arg.length > 0
                        ? XRegExp("^\\p{Cyrillic}+$").test(arg)
                        : true,
                "Используйте кириллицу",
            ),
        email: z.string().toLowerCase().trim().email("Неверная почта"),
        password: z
            .string()
            .trim()
            .min(8, "Пароль должен быть хотя бы из 8 символов")
            .max(32, "Слишком длинный пароль")
            .refine(
                (arg: string) =>
                    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{0,}$/.test(arg),
                "Пароль должен иметь хотя бы 1 цифру, 1 заглавную букву, 1 прописную букву, пароль должен состоять из латиницы",
            ),
        confirm: z.string().trim(),
        consent: z
            .boolean()
            .refine((field: boolean) => field, "Обязательное поле"),
    })
    .refine(({ password, confirm }) => password === confirm, {
        message: "Пароли не совпадают",
        path: ["confirm"],
    });

export type RegisterSchema = z.infer<typeof registerSchema>;
