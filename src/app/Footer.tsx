import React from "react";

const LoginFooter = () => {
  return (
    <div className="h-[40vh] min-w-full flex flex-col font-normal gap-12 shadow-inner text-teal-500/70">
      <div className="h-[20vh] flex min-w-full  justify-center py-6">
        <div className="text-sm gap-3 flex flex-col py-1">
          <img src="/logo.png" width={60} height={60} alt="" />
          <p className="font-normal text-sm">Copyright © 2024 CariKerja ltd.</p>
          <p>All rights reserved</p>
        </div>
        <div className="flex justify-around min-w-[60%] ">
          <div className="flex flex-col gap-3">
            <h1 className="text-m text-teal-500 ">Company</h1>
            <a href="" className="text-sm ">
              About Us
            </a>
            <a href="" className="text-sm ">
              FAQs
            </a>
            <a href="" className="text-sm ">
              Privacy Policy
            </a>
            <a href="" className="text-sm ">
              Testimonials
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-m text-teal-500">Support</h1>
            <a href="" className="text-sm">
              Help Center
            </a>
            <a href="" className="text-sm">
              Terms of Service
            </a>
            <a href="" className="text-sm">
              Legal
            </a>
            <a href="" className="text-sm">
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
