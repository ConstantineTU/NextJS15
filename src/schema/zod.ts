import { object, string, email } from "zod";

export const signInSchema = object({
  email: email("Invalid email"),
  password: string({
    error: (issue) =>
      issue.input === undefined ? "Password is required" : "Invalid input",
  })
    .min(1, "Password is required")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
});
