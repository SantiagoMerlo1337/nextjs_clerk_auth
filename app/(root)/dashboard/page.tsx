import Link from "next/link";
import React, { Fragment } from "react";

const DasboardPage = () => {
    return (
        <Fragment>
            <h1 className="flex-center text-4xl bg-pink-400 py-8 font-bold">
                DashboardPage
            </h1>
            <div className="flex-center my-24">
                <Link href={"/"} className="bg-emerald-400 p-4 rounded">
                    Go to Home
                </Link>
            </div>
        </Fragment>
    );
};

export default DasboardPage;
