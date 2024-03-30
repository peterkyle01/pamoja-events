import { useCurrentUser } from "@/lib/actions/auth";
import { redirect } from "next/navigation";

export default async function Admin() {
  const user = await useCurrentUser();
  if (!user) {
    redirect("/auth/login");
  }
  if (!user.is_admin) {
    return (
      <section className="mt-20 h-[30rem] w-full">
        <p className="text-2xl font-bold text-pm_blue">UNAUTHORIZED</p>
      </section>
    );
  }
  return <section className="mt-20 h-[30rem] w-full">Admin</section>;
}
