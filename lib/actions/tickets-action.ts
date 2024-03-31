"use server";

import { revalidatePath } from "next/cache";
import createSupabaseServerClient from "../supabase/server";
import { Tticket } from "../types";

export async function createTickets(ticket: Tticket) {
  const supabase = await createSupabaseServerClient();
  const result = await supabase.from("tickets").insert(ticket);
  revalidatePath("/tickets/view-previous-events");
  return JSON.stringify(result);
}

export async function readTickets(): Promise<Tticket[] | null> {
  const supabase = await createSupabaseServerClient();
  const result = await supabase.from("tickets").select("*");
  if (result.error) return null;
  return result.data;
}

export async function readTicketsByEventId(
  id: number,
): Promise<Tticket[] | null> {
  const supabase = await createSupabaseServerClient();
  const result = await supabase.from("tickets").select("*").eq("event_id", id);
  if (result.error) return null;
  return result.data;
}

export async function deleteTicketById(id: number) {
  const supabase = await createSupabaseServerClient();
  const result = await supabase.from("tickets").delete().eq("id", id).single();
  revalidatePath("/tickets/resell-your-tickets");
  return result.error;
}
