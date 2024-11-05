import Guest from "@/Layouts/GuestLayout";
import React from "react";
import { Head } from "@inertiajs/react";

function work() {
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
                    <h1 className=" font-bold md:text-6xl font-header text-5xl">
                        Transforming Ideas into Innovative Digital Solutions
                    </h1>
                    <p className=" mt-6 text-xl ">
                        We specialize in designing and developing stunning digital
                        experiences that drive business growth and delight users.
                        Explore our portfolio and discover how we can bring your
                        ideas to life.
                    </p>
                
                </div>
            </section>
        </Guest>
    );
}

export default work;
