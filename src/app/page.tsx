
import { Button } from "@/components/ui/button";
import HeaderHomePage from "./HeaderHomePage";
import Link from "next/link";
import Footer from "./Footer";

export default function Home() {
  return (
    <main>
      <HeaderHomePage />
      <div className="min-w-full min-h-screen flex items-center justify-center gap-24">
        <img src="/homepage.png" alt=""  width={500} height={500}/>
        <div className=" h-[250px] pt-4 flex flex-col gap-6">
          <h1 className="text-4xl font-bold text-teal-500 uppercase">Cari Kursus!</h1>
          <p className="w-[35ch] text-teal-500/70 text-md">Want to have fun and learn new things? Jump into our awesome courses and let's play and learn together!</p>
          <div className="flex gap-6">
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
          </div>
        </div>

      </div>
    </main>
  );
}
