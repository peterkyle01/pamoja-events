import SignupForm from "@/components/forms/signup-form";
import { useAuth } from "@/lib/actions/auth-action";
import { redirect } from "next/navigation";
import { unstable_noStore as noStore } from "next/cache";

export default async function Signup() {
  noStore();
  const {
    data: { session },
  } = await useAuth();
  if (session) {
    redirect("/");
  }
  return (
    <section className="mt-20 flex h-auto w-full flex-col items-center justify-center ">
      <p className="text-3xl font-black text-pm_brown">Sign Up</p>
      <SignupForm />
    </section>
  );
}
