import React from "react";

function ContactCard3({ back, next, data, setData }) {
    return (
        <form>
            <h1 className="text-black text-3xl font-bold font-header md:text-3xl">
                Tell us about your project
            </h1>
            <div className="py-10">
                <textarea
                    type="text"
                    placeholder="A short summary of what you want"
                    value={data.aboutBusiness}
                    onChange={(e) =>
                        setData("aboutBusiness", e.currentTarget.value)
                    }
                    required
                    className="pl-0 textarea textarea-bordered bg-transparent  border-b-black rounded-none w-full focus:border-b-black focus:outline-none focus:border-b text-3xl text-black"
                />
            </div>

            <div className="pt-20 flex justify-between">
                <button
                    onClick={() => back()}
                    className="btn btn-outline border-black text-black rounded-full px-7 text-lg hover:bg-black hover:text-white"
                >
                    Back
                </button>
                <button
                    onClick={next}
                    className="btn rounded-full px-7 text-lg text-white hover:bg-transparent hover:text-black"
                >
                    Next
                </button>
            </div>
        </form>
    );
}

export default ContactCard3;
