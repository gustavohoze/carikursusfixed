import React from "react";

const LoginFooter = () => {
  return (
    <div className="min-h-[40vh] min-w-full flex flex-col font-normal gap-12 shadow-md">
      <div className="h-[20vh] flex min-w-full  justify-center py-4">
        <div className="text-sm gap-3 flex flex-col py-1">
          <img src="/logo.png" width={60} height={60} alt="" />
          <p className="font-normal text-sm">Copyright © 2024 CariKerja ltd.</p>
          <p>All rights reserved</p>
        </div>
        <div className="flex justify-around min-w-[60%] ">
          <div className="flex flex-col gap-3">
            <h1 className="text-m ">Company</h1>
            <a href="" className="text-sm text-zinc-700">
              About Us
            </a>
            <a href="" className="text-sm text-zinc-700">
              FAQs
            </a>
            <a href="" className="text-sm text-zinc-700">
              Privacy Policy
            </a>
            <a href="" className="text-sm text-zinc-700">
              Testimonials
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-m">Support</h1>
            <a href="" className="text-sm text-zinc-700">
              Help Center
            </a>
            <a href="" className="text-sm text-zinc-700">
              Terms of Service
            </a>
            <a href="" className="text-sm text-zinc-700">
              Legal
            </a>
            <a href="" className="text-sm text-zinc-700">
              Status
            </a>
          </div>
        </div>
      </div>
      <div className="h-[10vh] flex gap-3 px-40 items-end">
        <a href="/" className="hover:opacity-50">
          <img src="/fb.png" alt="" width={45} height={45} />
        </a>
        <a href="/" className="hover:opacity-50">
          <img src="/yt.png" alt="" width={45} height={45} />
        </a>
        <a href="/" className="hover:opacity-50">
          <img src="/ig.png" alt="" width={45} height={45} />
        </a>
        <a href="/" className="hover:opacity-50">
          <img src="/twt.png" alt="" width={45} height={45} />
        </a>
      </div>
    </div>
  );
};

export default LoginFooter;
