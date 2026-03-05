"use client";

import { Button, Form, Input } from "@heroui/react";
import { FormEvent, useState } from "react";

interface LoginFormProps {
  onClose: () => void;
}

const LoginForm = ({ onClose }: LoginFormProps) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form submitted:", formData);

    onClose();
  };

  return (
    <Form className="w-full" onSubmit={onSubmit}>
      <Input
        isRequired
        name="email"
        placeholder="Введите email"
        type="email"
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
          return null;
        }}
      />
      <Input
        isRequired
        name="confirmPassword"
        labelPlacement="outside"
        placeholder="Введите пароль"
        type="password"
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
          return null;
        }}
      />
      <div className="flex w-[100%] gap-4 items-center pt-8 justify-end">
        <Button variant="light" onPress={onClose}>
          Отмена
        </Button>
        <Button type="submit" color="primary">
          Войти
        </Button>
      </div>
    </Form>
  );
};

export default LoginForm;
