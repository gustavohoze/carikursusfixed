import { Button } from "@/components/ui/button";
import React from "react";

const LoginHeader = () => {
  return (
    <header className="min-h-[10vh] min-w-full flex items-center justify-between p-4 shadow-md">
      <span className="flex items-center px-2 gap-4">
        <img src="/logo.png" alt="" width={25} height={25} />
        <a
          href="/"
          className="font-bold uppercase tracking-wide text-teal-500 text-xl"
        >
          CariKursus
        </a>
      </span>
      <a href="/" className="font-bolder">
        <Button> Home</Button>
      </a>
    </header>
  );
};

export default LoginHeader;
