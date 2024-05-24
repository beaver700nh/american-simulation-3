import { z } from "zod";

const MIN_PASSWORD = 8;

export const loginSchema = z.object({
  username: z.string(),
  password: z.string().min(MIN_PASSWORD),
});
export type LoginSchema = z.infer<typeof loginSchema>;

export const changeSchema = z.object({
  newPassword: z.string().min(MIN_PASSWORD),
});
export type ChangeSchema = z.infer<typeof changeSchema>;

export const resetSchema = z.object({});
export type ResetSchema = z.infer<typeof resetSchema>;
