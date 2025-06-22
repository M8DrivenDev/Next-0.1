import React from "react";
import Link from "next/link";
import Image from "next/image";
import { auth, signIn, signOut } from "@/auth";
import { Github } from "lucide-react";


const Navbar = async () => {
  const session = await auth();

  return (
    <div className="py-3 px-5 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href={"/"}>
          <Image src={"/logo.png"} width={144} height={30} alt="logo.png" />
        </Link>

        <div className="flex items-center text-black gap-5">
          {session && session.user ? (
            <div className="flex justify-center items-center gap-5">
              <button>Create</button>
              <form
                action={async () => {
                  "use server";

                  await signOut({ redirectTo: "/" });
                }}
              >
                <button type="submit" className="cursor-pointer">
                  <span className="max-sm:hidden">Logout</span>
                </button>
              </form>
              <div>{session.user.name}</div>
            </div>
          ) : (
            <>
              <form
                action={async () => {
                  "use server";

                  await signIn("github");
                }}
              >
                <button type="submit" className="signup-button">
                  <Github />
                  Github
                </button>
              </form>
              <form
                action={async () => {
                  "use server";

                  await signIn("google");
                }}
              >
                <button type="submit" className="signup-button">
                  <img
                    src={"./google.svg"}
                    alt="google"
                    width={20}
                    height={20}
                  />
                  Google
                </button>
              </form>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
