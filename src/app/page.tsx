import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header className="flex justify-between p-4 min-h-[10vh] min-w-full shadow-md">
        <span className="flex items-center px-2 gap-4">
          <img src="/logo.png" alt="" width={25} height={25}/>
          <a href="/" className="font-bold uppercase tracking-wide text-teal-500 text-xl">CariKursus</a>
        </span>
        <span className="flex gap-4">
          <Button asChild>
            <Link href="/login">
            Login
            </Link>
            </Button>
          <Button variant={"primaryOutline"} asChild>
            <Link href="/register">
            Register
            </Link>
            </Button>
        </span>
      </header>
    </main>
  );
}
