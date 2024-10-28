import React from "react";

function CarouselItem({ image, spacing }) {
    return (
        // <div class={`carousel-item   `}>
            <img
                className={`${spacing} h-96 md:h-[600px] w-auto object-cover"`}
                src={image}
                alt={image}
            />
        // </div>
    );
}

export default CarouselItem;
