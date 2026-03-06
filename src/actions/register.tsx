"use server";

import { prisma } from "@/libs/prisma";
import { FromData } from "@/types/form-data";

export async function registerUser(formData: FromData) {
  const { email, password, confirmPassword } = formData;

  try {
    const user = await prisma.user.create({
      data: {
        email: email,
        password: password,
      },
    });

    return user;
  } catch (error) {
    console.error("Ошибка регистрации", error);
    return { error: "Ошибка при регистрации" };
  }
}
