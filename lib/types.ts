import { z } from "zod";
import {
  eventFormSchema,
  logInFormSchema,
  signUpFormSchema,
  ticketFormSchema,
} from "./utils";

export type Tticket = z.infer<typeof ticketFormSchema>;

export type Tevent = z.infer<typeof eventFormSchema>;

export type TsignUp = z.infer<typeof signUpFormSchema>;

export type TlogIn = z.infer<typeof logInFormSchema>;

export type Tuser = {
  id: string;
  updated_at: string | null;
  username: string | null;
  full_name: string | null;
  avatar_url: string | null;
  website: string | null;
  is_admin: boolean;
};
