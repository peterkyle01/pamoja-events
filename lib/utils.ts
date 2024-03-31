import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { z } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const eventFormSchema = z.object({
  id: z.number().optional(),
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  image: z.string(),
  description: z
    .string()
    .min(2, { message: "Must be more than 2 characters" })
    .max(100, { message: "Must be less than 100 characters" }),
  location: z.string().min(1, { message: "Location is required" }),
  date_and_time: z.date(),
  regular_tickets: z.string().transform((regular) => Number(regular) || 0),
  vip_tickets: z.string().transform((vip) => Number(vip) || 0),
  vvip_tickets: z.string().transform((vvip) => Number(vvip) || 0),
  organizer_id: z.string(),
});

export const ticketFormSchema = z.object({
  id: z.number().optional(),
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Write correct email format" }),
  phone_number: z.string().transform((vip) => Number(vip) || 0),
  date_and_time: z.date(),
  type: z.enum(["REGULAR", "VIP", "VVIP"]),
  event_id: z.number(),
});

export const signUpFormSchema = z
  .object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    email: z.string().email({ message: "Write correct email format." }),
    password: z.string().min(6, {
      message: "Password must be at least 6 characters.",
    }),
    confirm_password: z.string(),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Confirm password must match password.",
    path: ["confirm_password"],
  });

export const logInFormSchema = z.object({
  email: z.string().email({ message: "Write correct email format" }),
  password: z.string().min(2, {
    message: "Password must be at least 6 characters.",
  }),
});
