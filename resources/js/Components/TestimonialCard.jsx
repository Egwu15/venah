import React from "react";

function TestimonialCard({ image, title, description }) {
    return (
        <div className="text-center flex flex-col items-center mb-6">
            <img src={image} alt="team members" className="rounded-full h-60 w-60  " />
            <h3 className="text-2xl">{title}</h3>
            <p className="text-lg">{description}</p>
        </div>
    );
}

export default TestimonialCard;
