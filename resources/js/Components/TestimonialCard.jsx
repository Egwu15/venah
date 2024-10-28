import React from "react";

function TestimonialCard({ image, title, description }) {
    return (
        <div className="text-center">
            <img src={image} alt="team members" />
            <h3 className="text-2xl">{title}</h3>
            <p className="text-lg">{description}</p>
        </div>
    );
}

export default TestimonialCard;
