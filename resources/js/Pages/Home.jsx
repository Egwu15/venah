import RoundedButton from "@/Components/button/RoundedButton";
import Carousel from "@/Components/carousel/Carousel";
import Guest from "@/Layouts/GuestLayout";
import { Head, Link } from "@inertiajs/react";
import normad_pay from "../../images/nomad_pay.png";
import seapers from "../../images/seapers.png";
import xRide from "../../images/xRide.png";
import nms from "../../images/nms.png";
import ValueCard from "@/Components/ValueCard";
import bulb from "../../images/icons/bulb.svg";
import hexIcon from "../../images/icons/hexicon.svg";
import smile from "../../images/icons/smile.svg";
import TestimonialCard from "@/Components/TestimonialCard";
import abigal from "../../images/abigal.jpeg";
import charles from "../../images/charles.jpeg";
import mujedah from "../../images/mujedah.jpeg";
import ted from "../../images/ted.jpeg";

function Home() {
    return (
        <Guest headerColor="bg-[#020306]">
            <Head>
                <title>Home</title>
                <meta
                    name="Home"
                    content="Transforming Ideas into Innovative Digital Solutions"
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
                    <RoundedButton fontWight="text-xl">
                        <p>Lets Talk</p>
                    </RoundedButton>
                </Link>
            </div>
            <Carousel />
            <section
                id="ourWork"
                className="text-balance text-black bg-[#F4E8D7]"
            >
                <div className="text-center py-20 sm:max-w-4xl mx-auto">
                    <h2 className="font-bold  font-header text-4xl">
                        Our Works
                    </h2>
                </div>

                <div className="flex justify-center px-6 py-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-9 ">
                        <Link href="/project" data={{ project: "Seapers" }}>
                            <img
                                src={seapers}
                                className="pb-10  md:-translate-y-20"
                            />
                        </Link>
                        <Link href="/project" data={{ project: "NomadPay" }}>
                            <img src={normad_pay} className="pb-10 " />
                        </Link>
                        <Link href="/project" data={{ project: "Xride" }}>
                            <img
                                src={xRide}
                                className="pb-10  md:-translate-y-20"
                            />
                        </Link>
                        <Link href="/project" data={{ project: "NMS" }}>
                            <img src={nms} className="pb-10 " />
                        </Link>
                    </div>
                </div>
            </section>
            <section id="aboutUs" className="py-20 mx-auto px-6 text-white">
                <div className="text-center sm:max-w-4xl mx-auto">
                    <h1 className=" font-bold md:text-5xl font-header text-5xl">
                        Our Values
                    </h1>
                    <p className=" mt-6 text-xl text-balance">
                        At Venah, our values guide every project, every idea,
                        and every partnership we build. They define who we are,
                        how we work, and what we deliver. Here’s what we stand
                        for:
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 px-16 gap-14 pt-20">
                    <ValueCard
                        icon={bulb}
                        title="Partnership"
                        description="We believe great digital experiences come from collaboration. By treating each project as a partnership, we listen, adapt, and bring our clients’ visions to life. Together, we build relationships based on trust, transparency, and shared goals."
                    />
                    <ValueCard
                        icon={hexIcon}
                        title="Innovation & Quality"
                        description="We’re driven by a passion for innovation and a commitment to excellence. We push boundaries to create impactful designs and solutions that stand out and endure. Quality is never compromised; we take pride in delivering work that’s both creative and reliable."
                    />
                    <ValueCard
                        icon={smile}
                        title="User-Centric"
                        description="Every experience we create starts with the user. We deeply understand users' needs and behaviors to design products that not only engage but also delight. By putting the user at the heart of our process, we help our clients connect meaningfully with their audiences."
                    />
                </div>
            </section>

            <section className="text-balance text-black bg-[#F4E8D7]">
                <div className="text-center py-20 sm:max-w-4xl mx-auto">
                    <h2 className="font-bold  font-header text-4xl">
                        The Team
                    </h2>
                    <p className=" mt-6 text-xl text-balance">
                        We are a team of creative people with a passion for
                        impactful digital experience. For us, every project is a
                        partnership and an opportunity to to bring our clients
                        visions to life in ways that excite their users and
                        deliver real value.
                    </p>
                </div>

                <div className="flex justify-center px-6 py-10 ">
                    <div className="md:flex gap-10 mx-a">
                        <TestimonialCard
                            image={charles}
                            title="Charles Oloyede"
                            description="Product"
                        />
                        <TestimonialCard
                            image={mujedah}
                            title="Mujeedah Ashiru"
                            description="Product Design"
                        />
                        <TestimonialCard
                            image={ted}
                            title="Ted Egwu"
                            description="Software Engineering"
                        />
                        <TestimonialCard
                            image={abigal}
                            title="Abigael Adebayo"
                            description="Business Development"
                        />
                    </div>
                </div>
            </section>
        </Guest>
    );
}

export default Home;
