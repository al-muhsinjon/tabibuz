import React from "react";
import Container from "./container";
import Link from "next/link";
import Image from "next/image";
import Button from "./button";
import { Search } from "lucide-react";
import logo from "@/public/logo.png";

const Navbar = () => {
  return (
    <header className="border-b px-3">
      <Container>
        <div className="w-full h-20 flex justify-between items-center ">
          <Link href="/">
            <Image
              src={logo}
              className="object-contain w-6 ml-2 md:w-12"
              alt="logo"
            />
          </Link>
          <div className="flex items-center bg-white px-2 rounded-lg w-[40%]">
            <input
              type="text"
              className="indent-3 py-2 bg-transparent outline-none text-black w-full "
              placeholder="Search..."
            />
            <Search color="gray" />
          </div>
          <div className="flex gap-3">
            <Button action>Sign up</Button>
            <Button action>Login</Button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
