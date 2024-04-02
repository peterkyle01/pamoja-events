import LoginForm from "@/components/forms/login-form";
import { useAuth } from "@/lib/actions/auth-action";
import { redirect } from "next/navigation";
import { unstable_noStore as noStore } from "next/cache";

export default async function Login() {
  noStore();
  const {
    data: { session },
  } = await useAuth();
  if (session) {
    redirect("/tickets");
  }
  return (
    <section className="mt-20 flex h-[30rem] w-full flex-col items-center justify-center ">
      <p className="text-3xl font-black text-pm_brown">Log In</p>
      <LoginForm />
    </section>
  );
}
