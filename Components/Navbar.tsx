import { NavLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AuthProvider from "./AuthProvider";

export default function Navbar() {
  let session = null;
  return (
    <nav className="flexBetween navbar">
      <div className="flex1 flexStart gap-10">
        <Link href="/">
          <Image src="/logo.svg" alt="Logo" width={115} height={43} />
        </Link>
        <ul className="xl:flex hidden text-small gap-7">
          {NavLinks.map((item) => {
            return (
              <Link href={item.href} key={item.key}>
                {item.text}
              </Link>
            );
          })}
        </ul>
      </div>
      <div className="flexCenter gap-4">
        {session ? (
          <>
            UserPhoto
            <Link href="/create-project">Share Work</Link>
          </>
        ) : (
          <AuthProvider />
        )}
      </div>
    </nav>
  );
}
