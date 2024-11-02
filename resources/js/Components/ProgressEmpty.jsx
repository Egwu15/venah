import React from "react";

function ProgressEmpty() {
    return (
        <div className="w-full">
            <progress
                className="progress max-w-lg"
                value="100"
                max="100"
            ></progress>
        </div>
    );
}

export default ProgressEmpty;
