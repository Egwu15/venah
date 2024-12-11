import React from "react";

function TestimonialCard({ image, title, description }) {
    return (
        <div className="text-center flex flex-col items-center">
            <img src={image} alt="team members" className="rounded-full h-32 w-32" />
            <h3 className="text-2xl">{title}</h3>
            <p className="text-lg">{description}</p>
        </div>
    );
}

export default TestimonialCard;
