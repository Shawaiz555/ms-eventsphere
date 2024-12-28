"use client";
import Image from "next/image";
import Link from "next/link";

export default function SideBar({ closeSidebar }) {
    return (
        <div className="w-full h-full border-gray-300">
            <div className="flex gap-2 justify-center items-center mt-5">
                <Image
                    src="/ProjectLogo.png"
                    width={30}
                    height={30}
                    alt="FC Logo"
                    className="w-[65px] h-[55px] lg:w-[75px] lg:h-[70px] rounded-[100%]"
        />
                {/* <div className="bg-black px-5 py-5 rounded-[100%]">
                    <h1 className="text-xl text-white font-bold font-serif tracking-widest">MS</h1>
                </div> */}

            </div>
            <div className="mt-7">
                <ul>
                    <h1 className="mb-3 text-lg font-serif text-center tracking-wider">Dashboard</h1>
                    <div className="border-b-[1px] border-t-[1px] border-gray-300">
                        <li
                            className="text-center text-sm lg:text-md tracking-widest py-3"
                            onClick={closeSidebar} // Close sidebar when clicking
                        >
                            <Link href="/">Home</Link>
                        </li>
                        <li
                            className="text-center text-sm lg:text-md tracking-widest py-3"
                            onClick={closeSidebar} // Close sidebar when clicking
                        >
                            <Link href="/Analytics">Analytics</Link>
                        </li>
                    </div>
                </ul>
            </div>

        </div>
    );
}