"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { logOut } from "@/lib/actions/auth-action";
import { useRouter } from "next/navigation";
import { Session } from "@supabase/supabase-js";

export default function NavbarButtons({
  session,
}: {
  session: Session | null;
}) {
  const router = useRouter();
  async function signOut() {
    await logOut();
    router.push("/auth/login");
  }
  return (
    <>
      {session ? (
        <div className="flex flex-col gap-2 md:flex-row md:items-center">
          <p className="font-bold">{session.user.email}</p>
          <Button onClick={signOut}>Sign Out</Button>
        </div>
      ) : (
        <>
          <Link href={"/auth/signup"}>
            <Button>Sign Up</Button>
          </Link>
          <Link href={"/auth/login"}>
            <Button variant={"outline"} className="text-pm_blue">
              Log In
            </Button>
          </Link>
        </>
      )}
    </>
  );
}
