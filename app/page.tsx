import { auth } from "@/auth";
import { login, logout } from "@/lib/actions/auth";

export default async function Home() {
  const session = await auth();

  if (!session) {
    return (
      <div className="w-screen h-screen flex not-last:justify-center items-center flex-col">
        <h1 className="text-3xl p-7 ">Sign in to get Started</h1>
        <form action={login}>
          <button
            className="bg-amber-900 p-5 rounded-2xl text-xl cursor-pointer"
            type="submit"
          >
            Sign With github
          </button>
        </form>
      </div>
    );
  } else {
    return (
      <div className="w-screen h-screen flex not-last:justify-center items-center flex-col">
        <h1 className="text-3xl p-7 ">Welcome back {session.user?.name}</h1>
        <form action={logout}>
          <button
            className="bg-amber-900 p-5 rounded-2xl text-xl cursor-pointer"
            type="submit"
          >
          Logout
          </button>
        </form>
      </div>
    );
  }
}
