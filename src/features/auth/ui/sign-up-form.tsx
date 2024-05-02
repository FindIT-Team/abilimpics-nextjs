import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormErrorMessage,
  Heading,
  Input,
  Link as ChakraLink,
  VStack,
} from "@chakra-ui/react";
import { Form, Link, useActionData } from "@remix-run/react";
import { useRemixFormContext } from "remix-hook-form";
import { RegistrationSchema } from "../index";

export function SignUpForm() {
  const { handleSubmit, register, formState } =
    useRemixFormContext<RegistrationSchema>();

  const fields = [
    "firstName",
    "lastName",
    "patronymic",
    "email",
    "password",
    "confirm",
    "consent",
  ];

  const { errors, dirtyFields } = formState;
  const isDisabled =
    Object.entries(errors).some(([, value]) => value) ||
    !fields
      .filter((field) => field !== "patronymic")
      .every((field) => field in dirtyFields);

  return (
    <Form style={{ maxWidth: "700px" }} onSubmit={handleSubmit}>
      <VStack paddingY={5} paddingX={16} spacing={10}>
        <Box>
          <Heading textAlign={"center"}>
            Регистрация в цифровой платформе по организации чемпионатов
            <br />
            &quot;Абилимпикс Москва&quot;
          </Heading>
        </Box>
        <VStack spacing={6} width={"full"}>
          <VStack width={"full"}>
            <FormControl isInvalid={!!errors.firstName?.message}>
              <Input
                variant={"filled"}
                placeholder={"Имя"}
                {...register("firstName")}
              />
              <FormErrorMessage>{errors.firstName?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.lastName?.message}>
              <Input
                variant={"filled"}
                placeholder={"Фамилия"}
                {...register("lastName")}
              />
              <FormErrorMessage>{errors.lastName?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.patronymic?.message}>
              <Input
                variant={"filled"}
                placeholder={"Отчество"}
                {...register("patronymic")}
              />
              <FormErrorMessage>{errors.patronymic?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.email?.message}>
              <Input
                variant={"filled"}
                placeholder={"Почта"}
                {...register("email")}
              />
              <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.password?.message}>
              <Input
                variant={"filled"}
                placeholder={"Пароль"}
                type={"password"}
                {...register("password")}
              />
              <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.confirm?.message}>
              <Input
                variant={"filled"}
                placeholder={"Подтверждение пароля"}
                type={"password"}
                {...register("confirm")}
              />
              <FormErrorMessage>{errors.confirm?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.consent?.message}>
              <Checkbox {...register("consent")}>
                Я согласен с{" "}
                <ChakraLink
                  as={Link}
                  to={"/confidentiality"}
                  color={"gray.400"}
                >
                  политикой конфиденциальности и правилами обработки
                  персональных данных
                </ChakraLink>
              </Checkbox>
              <FormErrorMessage>{errors.consent?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={useActionData() === "Unprocessable entity"}>
              <FormErrorMessage>Почта занята</FormErrorMessage>
            </FormControl>
          </VStack>

          <VStack width={"full"}>
            <Button
              width={"full"}
              _hover={{ background: isDisabled ? undefined : "blue.700" }}
              isDisabled={isDisabled}
              type={"submit"}
            >
              Зарегистрироваться
            </Button>
            <ChakraLink as={Link} to={"/login"}>
              Назад
            </ChakraLink>
          </VStack>
        </VStack>
      </VStack>
    </Form>
  );
}
