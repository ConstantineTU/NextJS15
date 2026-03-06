"use client";

import { Button, Form, Input } from "@heroui/react";
import { FormEvent, useState } from "react";

import { registerUser } from "@/actions/register";

interface RegistrationFormProps {
  onClose: () => void;
}

const RegistrationForm = ({ onClose }: RegistrationFormProps) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form submitted:", formData);

    const result = await registerUser(formData);

    console.log("result", result);

    onClose();
  };

  return (
    <Form className="w-full" onSubmit={onSubmit}>
      <Input
        isRequired
        name="email"
        placeholder="Введите email"
        type="email"
        autoComplete="email"
        value={formData.email}
        classNames={{
          inputWrapper: "bg-default-100",
          input: "text-sm focus:outline-none",
        }}
        onChange={(event) =>
          setFormData((prevFormData) => ({
            ...prevFormData,
            email: event.target.value,
          }))
        }
        validate={(value) => {
          if (!value) return "Почта обязательна";
          if (!validateEmail(value)) return "Некорректный email";
          return null;
        }}
      />
      <Input
        isRequired
        name="password"
        type="password"
        autoComplete="new-password"
        labelPlacement="outside"
        placeholder="Введите пароль"
        value={formData.password}
        classNames={{
          inputWrapper: "bg-default-100",
          input: "text-sm focus:outline-none",
        }}
        onChange={(event) =>
          setFormData((prevFormData) => ({
            ...prevFormData,
            password: event.target.value,
          }))
        }
        validate={(value) => {
          if (!value) return "Пароль обязателен";
          if (value.length < 6) return "Пароль должен быть не менее 6 символов";
          return null;
        }}
      />
      <Input
        isRequired
        name="confirmPassword"
        type="password"
        autoComplete="new-password"
        labelPlacement="outside"
        placeholder="Подтвердите пароль"
        value={formData.confirmPassword}
        classNames={{
          inputWrapper: "bg-default-100 border-none shadow-none",
          input: "text-sm focus:outline-none",
        }}
        onChange={(event) =>
          setFormData((prevFormData) => ({
            ...prevFormData,
            confirmPassword: event.target.value,
          }))
        }
        validate={(value) => {
          if (!value) return "Пароль для подтверждения обязателен";
          if (value.length < 6) return "Пароль должен быть не менее 6 символов";
          return null;
        }}
      />
      <div className="flex w-[100%] gap-4 items-center pt-8 justify-end">
        <Button variant="light" onPress={onClose}>
          Отмена
        </Button>
        <Button type="submit" color="primary">
          Зарегистрироваться
        </Button>
      </div>
    </Form>
  );
};

export default RegistrationForm;
