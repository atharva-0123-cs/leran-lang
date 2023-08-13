'use client'
// const { default: Link } = require("next/link");
import Link from "next/link";
import { usePathname } from "next/navigation";
import {BiSolidBook} from 'react-icons/bi'
import {BsPersonCircle} from 'react-icons/bs';
import {AiOutlineCode} from 'react-icons/ai';
import {PiCodesandboxLogoLight} from 'react-icons/pi';
import {CiLogout} from 'react-icons/ci';


const SideBar = () => {

  const pathname = usePathname();
  // console.log(pathname);

  return (
 
    <div className="flex flex-col rounded-lg max-w-sm bg-slate-700 text-white font-bold p-8 py-18 m-16 fixed">
        <h1 className="pointer text-green-500 text-center text-2xl">Learn-Lang</h1>
      <Link
        href="/learn"
        className={!pathname.includes("learn") ? "flex bg-slate-600 items-center justify-center gap-1 hover:bg-green-400 rounded p-2 my-4 text-center transition delay-50 ease-out" : "flex bg-green-400 items-center justify-center gap-1 hover:bg-green-400 rounded p-2 my-4 text-center transition delay-50 ease-out"}
        > 
        <BiSolidBook/>
        Learn
      </Link>
      <Link
        href="/profile"
        className={!pathname.includes("profile") ?"flex items-center justify-center gap-2 bg-slate-600 hover:bg-green-400 rounded p-2 my-4 text-center transition delay-50 ease-out" : "flex items-center justify-center gap-2 bg-green-400 hover:bg-green-400 rounded p-2 my-4 text-center transition delay-50 ease-out"}
      >
        <BsPersonCircle/>
        Profile
      </Link>
      <Link
        href="/playground"
        className={!pathname.includes("playground") ?"flex items-center justify-center gap-2 bg-slate-600 hover:bg-green-400 rounded p-2 my-4 text-center transition delay-50 ease-out" : "flex items-center justify-center gap-2 bg-green-400 hover:bg-green-400 rounded p-2 my-4 text-center transition delay-50 ease-out"}
      >
        <AiOutlineCode/>
        Code
      </Link>
      <Link
        href="/quests"
        className={!pathname.includes("quests") ?"flex items-center justify-center gap-1 bg-slate-600 hover:bg-green-400 rounded p-2 my-4 text-center transition delay-50 ease-out" : "flex items-center justify-center gap-1 bg-green-400 hover:bg-green-400 rounded p-2 my-4 text-center transition delay-50 ease-out"}
      >
        <PiCodesandboxLogoLight/>
        Quests
      </Link>
      <Link
        href="/"
        className="flex items-center justify-center gap-1 bg-red-500 hover:bg-red-400 rounded p-2 my-8 text-center"
      >
        <CiLogout/>
        Logout
      </Link>
    </div>
  );
};

export default SideBar;
