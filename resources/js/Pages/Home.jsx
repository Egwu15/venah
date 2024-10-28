import RoundedButton from "@/Components/button/RoundedButton";
import Carousel from "@/Components/carousel/Carousel";
import Guest from "@/Layouts/GuestLayout";
import { Head, Link } from "@inertiajs/react";
import normad_pay from "../../images/nomad_pay.png";
import seapers from "../../images/seapers.png";
import seapers2 from "../../images/seapers2.png";
import xRide from "../../images/x-ride.png";
import ValueCard from "@/Components/ValueCard";
import bulb from "../../images/icons/bulb.svg";
import hexicon from "../../images/icons/hexicon.svg";
import smile from "../../images/icons/smile.svg";
import TestimonialCard from "@/Components/TestimonialCard";
import team1 from "../../images/team1.png";
import team2 from "../../images/team2.png";
import team3 from "../../images/team3.png";
import team4 from "../../images/team4.png";

function Home() {
    return (
        <Guest headerColor="bg-[#020306]">
            <Head>
                <title>Home</title>
                <meta
                    name="Home"
                    content="Transforming Ideas into Innovative Digital Solutions
"
                />
            </Head>
            <div className="text-center py-20 sm:max-w-4xl mx-auto px-6">
                <h1 className="text-white font-bold md:text-6xl font-header text-5xl">
                    Transforming Ideas into Innovative Digital Solutions
                </h1>
                <p className="text-white mt-6 text-xl ">
                    We specialize in designing and developing stunning digital
                    experiences that drive business growth and delight users.
                    Explore our portfolio and discover how we can bring your
                    ideas to life.
                </p>

                <Link href="#talk">
                    <RoundedButton>
                        <p>Lets Talk</p>
                    </RoundedButton>
                </Link>
            </div>
            <Carousel />
            <section id="ourWork" className="text-balance text-black bg-[#F4E8D7]">
                <div className="text-center py-20 sm:max-w-4xl mx-auto">
                    <h2 className="font-bold  font-header text-4xl">
                        Our Works
                    </h2>
                </div>

                <div className="flex justify-center px-6 py-10">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-9 ">
                        <img src={seapers} class="pb-10  md:-translate-y-20" />
                        <img src={normad_pay} class="pb-10 " />
                        <img src={xRide} class="pb-10  md:-translate-y-20" />
                        <img src={seapers2} class="pb-10 " />
                    </div>
                </div>
            </section>
            <section id="aboutUs" className="py-20 mx-auto px-6 text-white">
                <div className="text-center sm:max-w-4xl mx-auto">
                    <h1 className=" font-bold md:text-5xl font-header text-5xl">
                        Our Values
                    </h1>
                    <p className=" mt-6 text-xl text-balance">
                        We are a leading digital product agency with ideas that
                        are out of the box. We focus on ui/ux design, mobile and
                        web development.
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 px-16 gap-14 pt-20">
                    <ValueCard
                        icon={bulb}
                        title="Innovation and Quality"
                        description="We push the boundaries of what's possible in digital design and development whilst delivering the highest quality work."
                    />
                    <ValueCard
                        icon={hexicon}
                        title="Integrity"
                        description="We conduct our business with honesty and transparency, building trust through every interaction"
                    />
                    <ValueCard
                        icon={smile}
                        title="User centric"
                        description="We prioritize the needs and experiences of users, ensuring that our solutions are intuitive and engaging."
                    />
                </div>
            </section>

            <section className="text-balance text-black bg-[#F4E8D7]">
                <div className="text-center py-20 sm:max-w-4xl mx-auto">
                    <h2 className="font-bold  font-header text-4xl">
                        The Team
                    </h2>
                    <p className=" mt-6 text-xl ">
                        We are a leading digital product agency with ideas that
                        are out of the box. We focus on ui/ux design, mobile and
                        web development.
                    </p>
                </div>

                <div className="flex justify-center px-6 py-10 ">
                    <div class="md:flex gap-10 mx-a">
                        <TestimonialCard
                            image={team1}
                            title="Charles Oloyede"
                            description="Product Owner"
                        />
                        <TestimonialCard
                            image={team2}
                            title="Charles Oloyede"
                            description="Brand Designer"
                        />
                        <TestimonialCard
                            image={team3}
                            title="Charles Oloyede"
                            description="Product Designer"
                        />
                        <TestimonialCard
                            image={team4}
                            title="Charles Oloyede"
                            description="Full stack Developer"
                        />
                    </div>
                </div>
            </section>
        </Guest>
    );
}

export default Home;
