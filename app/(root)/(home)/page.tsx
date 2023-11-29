import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
    return (
        <div>
            <h1 className="flex-center text-4xl bg-emerald-400 py-8 font-bold">
                HomePage
            </h1>
            <div className="flex-center my-24">
                <Link href={"/dashboard"} className="bg-pink-400 p-4 rounded">
                    Go to Dashboard
                </Link>
            </div>
        </div>
    );
}
