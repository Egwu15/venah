import React from "react";
import Guest from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";
import seapars from "../../../images/Seapars-banner.png";
import seaparsMobile1 from "../../../images/mobiles/seapers-mobile1.png";
import seaparsMobile2 from "../../../images/mobiles/seapers-mobile2.png";
import seaparsMobile3 from "../../../images/mobiles/seapers-mobile3.png";
import normad_pay from "../../../images/nomad_pay.png";
import xRide from "../../../images/xRide.png";
import nms from "../../../images/nms.png";

function Project() {
    return (
        <Guest headerColor="bg-[#FFFFFF]">
            <Head>
                <title>Works</title>
                <meta
                    name="Works"
                    content="Transforming urban transportation with seamless ride hailing."
                />
            </Head>

            <section className="text-black">
                <div className="text-center py-20 sm:max-w-4xl mx-auto px-6">
                    <h1 className=" font-bold md:text-5xl font-header text-4xl">
                        Helping small businesses manage their resources
                        efficiently.
                    </h1>
                </div>

                <div className="md:px-10 px-3">
                    <img src={seapars} alt="business banger" />
                </div>

                <div className=" max-w-lg mx-auto py-20 md:py-12 px-3 md:px-0">
                    <p>
                        Seapars provides SMEs with a comprehensive solution to
                        manage finances, inventory, customer relationships, and
                        projects. We developed a responsive, intuitive dashboard
                        to give business owners full control over their
                        operations in real-time by tracking their finances,
                        managing inventory, and overseeing projects in one
                        place.
                    </p>
                </div>

                <div className="grid grid-row-3 grid-flow-col gap-4 max-w-2xl mx-auto">
                    <img src={seaparsMobile1} alt="" />
                    <img src={seaparsMobile2} alt="" />
                    <img src={seaparsMobile3} alt="" />
                </div>
            </section>

            <section className="bg-[#F4E8D7] py-24 px-24 mt-24 ">
                <div>
                    <p className="text-black font-header font-bold text-4xl w-full">
                        Other Works
                    </p>
                </div>

                <div className="w-full">
                    <div className="grid grid-row-3 grid-flow-col gap-4  mx-auto">
                        <img src={normad_pay} className="pb-10 " />
                        <img src={xRide} className="" />
                        <img src={nms} className="pb-10 " />
                    </div>
                </div>
            </section>
        </Guest>
    );
}

export default Project;
