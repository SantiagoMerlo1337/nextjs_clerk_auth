import { SignedIn, UserButton } from "@clerk/nextjs";
import React from "react";

const Navbar = () => {
    return (
        <div className="flex-between bg-slate-600 py-8 px-4">
            <h2>ClerkAuth 👾</h2>
            <SignedIn>
                <UserButton afterSignOutUrl="/" />
            </SignedIn>
        </div>
    );
};

export default Navbar;
