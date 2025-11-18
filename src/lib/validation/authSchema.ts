import { z } from "zod";

export const authSchema = z
  .object({
    signState: z.enum(["Sign In", "Sign Up"]),
    fullname: z.string().optional(),
    email: z.email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().optional(),
  })
  .refine(
    (data) => {
      if (data.signState === "Sign Up") {
        return !!data.fullname?.trim();
      }
      return true;
    },
    { message: "Full name is required", path: ["fullname"] }
  )
  .refine(
    (data) => {
      if (data.signState === "Sign Up") {
        return data.password === data.confirmPassword;
      }
      return true;
    },
    { message: "Passwords do not match", path: ["confirmPassword"] }
  );

export type AuthSchema = z.infer<typeof authSchema>;
