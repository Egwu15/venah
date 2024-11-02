import React from "react";

function ProgressFull() {
    return (
        <div className="w-full">
            <progress
                className="progress max-w-lg bg-black"
                value="0"
                max="100"
            ></progress>
        </div>
    );
}

export default ProgressFull;
