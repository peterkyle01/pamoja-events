"use server";

import createSupabaseServerClient from "../supabase/server";
import { TsignUp, TlogIn, Tuser } from "../types";

export async function signUpWithEmailAndPassword(data: TsignUp) {
  const supabase = await createSupabaseServerClient();
  const result = await supabase.auth.signUp({
    email: data.email,
    password: data.password,
  });
  return JSON.stringify(result);
}

export async function signInWithEmailAndPassword(data: TlogIn) {
  const supabase = await createSupabaseServerClient();
  const result = await supabase.auth.signInWithPassword({
    email: data.email,
    password: data.password,
  });
  return JSON.stringify(result);
}

export async function useAuth() {
  const supabase = await createSupabaseServerClient();
  return supabase.auth.getSession();
}

export async function useCurrentUser(): Promise<Tuser> {
  const supabase = await createSupabaseServerClient();
  const { data } = await supabase.from("profiles").select("*").single();
  return data;
}

export async function logOut() {
  const supabase = await createSupabaseServerClient();
  await supabase.auth.signOut();
}
