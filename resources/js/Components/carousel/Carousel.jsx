import people from "../../../images/people.png";
import mobile_dev from "../../../images/mobile_dev.png";
import people_close from "../../../images/people_close.png";
import brand_image from "../../../images/brand_image.png";
import people_table from "../../../images/people_table.png";
import product_img from "../../../images/product_img.png";
import services_image from "../../../images/services_image.svg";
import CarouselItem from "./CarouselItem";
import "./carousel.css";
const Carousel = () => {
    return (
        <div className="carousel mb-20" style={{ height: "30%" }}>
            <div className="flex scroll-animation">
                <CarouselItem
                    image={services_image}
                    spacing="pr-4 pr-[120px]"
                />
                <CarouselItem image={people} spacing="pr-10 " />
                <CarouselItem image={brand_image} spacing="pr-4 pr-[120px]" />
                <CarouselItem image={people_close} spacing="pr-4 " />
                <CarouselItem image={product_img} spacing="pr-4 pr-[120px]" />
                <CarouselItem image={people_table} spacing="pr-4 " />
                <CarouselItem image={mobile_dev} spacing="pr-4" />
            </div>
        </div>
    );
};

export default Carousel;
