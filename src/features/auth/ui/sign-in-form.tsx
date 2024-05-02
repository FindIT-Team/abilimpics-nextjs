import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  Heading,
  Input,
  Link as ChakraLink,
  VStack,
} from "@chakra-ui/react";
import { Form, Link, useActionData } from "@remix-run/react";
import { useRemixFormContext } from "remix-hook-form";
import { LoginSchema } from "../index";

export function SignInForm() {
  const { handleSubmit, register, formState } =
    useRemixFormContext<LoginSchema>();

  const fields = ["email", "password"];

  const { errors, dirtyFields } = formState;
  const isDisabled =
    Object.entries(errors).some(([, value]) => value) ||
    !fields.every((field) => field in dirtyFields);

  return (
    <Form style={{ maxWidth: "700px" }} onSubmit={handleSubmit}>
      <VStack paddingY={5} paddingX={16} spacing={10}>
        <Box>
          <Heading textAlign={"center"}>
            Добро пожаловать в цифровую платформу всероссийских чемпионатных
            движения
            <br />
            &quot;Абилимпикс Москва&quot;
          </Heading>
        </Box>
        <VStack spacing={6} width={"full"}>
          <VStack width={"full"}>
            <FormControl isInvalid={!!errors.email?.message}>
              <Input
                variant={"filled"}
                placeholder={"Почта"}
                id={"email"}
                {...register("email")}
              />
              <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.password?.message}>
              <Input
                variant={"filled"}
                placeholder={"Пароль"}
                type={"password"}
                id={"password"}
                {...register("password")}
              />
              <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
            </FormControl>

            <ChakraLink as={Link} to={"/forgot-password"} alignSelf={"end"}>
              Забыли пароль?
            </ChakraLink>
            <FormControl isInvalid={useActionData() === "Unauthorized"}>
              <FormErrorMessage>Неверные данные</FormErrorMessage>
            </FormControl>
          </VStack>

          <VStack width={"full"}>
            <Button
              width={"full"}
              _hover={{ background: isDisabled ? undefined : "blue.700" }}
              isDisabled={isDisabled}
              type={"submit"}
            >
              Войти
            </Button>
            <ChakraLink as={Link} to={"/registration"}>
              Регистрация
            </ChakraLink>
          </VStack>
        </VStack>
      </VStack>
    </Form>
  );
}
