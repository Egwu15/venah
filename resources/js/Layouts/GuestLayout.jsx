import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import RoundedButton from "@/Components/button/RoundedButton";
import x from "../../images/icons/x.png";
import linkden from "../../images/icons/linkden.png";
import instagram from "../../images/icons/instagram.png";

export default function Guest({
    children,
    headerColor = "bg-gray-100",
    logoVariant = "white",
}) {
    return (
        <div
            className={`flex flex-col items-center  pt-6 sm:justify-center sm:pt-0 ${headerColor} `}
        >
            <div
                className={`mt-6 w-full overflow-hidden px-6 py-4 shadow-md sm:max-w-md md:max-w-[50%] rounded-full bg-[#1D1E20] flex justify-between items-center`}
            >
                <Link href="/">
                    {logoVariant === "white" ? (
                        <ApplicationLogo className="h-20 w-20 fill-current text-black" />
                    ) : (
                        "Add black Logo here"
                    )}
                </Link>
                <Link href="#aboutUs">
                    <h2 className="text-white">About Us</h2>
                </Link>
                <Link href="#ourWork">
                    <button className="bg-white px-3 py-2 rounded-full text-black">
                        Explore our work
                    </button>
                </Link>
            </div>

            <div className="mt-6 w-full overflow-hidden py-4 shadow-md ">
                {children}
            </div>
            <footer
                id="talk"
                className="text-center py-20  mx-auto px-6 w-full text-white"
            >
                <h1 className=" font-bold md:text-6xl font-header text-5xl sm:max-w-4xl mx-auto">
                    Ready to shape the future of the world?
                </h1>
                <RoundedButton>
                    <p>Lets Talk</p>
                </RoundedButton>
                <hr className="md:mx-20 mt-20 mb-16" />
                <div className="md:flex justify-between items-center md:mx-20">
                    <div>
                        <ApplicationLogo />
                        <p className="text-xl text-start">
                            Shaping the future of products.
                        </p>
                    </div>
                    <p className=" mt-6 text-xl text-start">
                        @2023 Venah All Rights Reserved
                    </p>
                    <div className="flex gap-4 justify-center mt-2 md:mt-0">
                        <img src={linkden} alt="linkden" />
                        <img src={x} alt="x" />
                        <img src={instagram} alt="instagram" />
                    </div>
                </div>
            </footer>
        </div>
    );
}
