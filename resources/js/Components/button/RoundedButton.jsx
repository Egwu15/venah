import React from "react";

function RoundedButton({
    children,
    bgColor = "bg-white",
    textColor = "text-black",
    hoverColor = "hover:bg-gray-200",
    fontWight = "text-xl",
    onclick,
}) {
    return (
        <button
            onClick={() => onclick()}
            className={`${bgColor} ${textColor} ${hoverColor} ${fontWight} rounded-full px-5 py-1 my-4 font-medium hover:bg-transparent hover:text-white hover:outline outline-white`}
        >
            {children}
        </button>
    );
}

export default RoundedButton;
