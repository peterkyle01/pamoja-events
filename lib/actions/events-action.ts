"use server";

import { revalidatePath } from "next/cache";
import createSupabaseServerClient from "../supabase/server";
import { Tevent } from "../types";

export async function createEvent(event: Tevent) {
  const supabase = await createSupabaseServerClient();
  const result = await supabase.from("events").insert(event);
  revalidatePath("/tickets/book-a-ticket");
  return JSON.stringify(result);
}

export async function readEvents(): Promise<Tevent[] | null> {
  const supabase = await createSupabaseServerClient();
  const result = await supabase.from("events").select("*");
  if (result.error) return null;
  return result.data;
}

export async function readEventById(id: number): Promise<Tevent | null> {
  const supabase = await createSupabaseServerClient();
  const result = await supabase
    .from("events")
    .select("*")
    .eq("id", id);
  if (result.error) return null;
  return result.data[0];
}

export async function updateEventById() {}

export async function deleteEventById() {}

export async function readStorage(path: string) {
  const supabase = await createSupabaseServerClient();
  try {
    const {
      data: { publicUrl },
    } = supabase.storage.from("events").getPublicUrl(path);
    return publicUrl;
  } catch (error) {
    console.log("Error downloading image: ", error);
  }
}
