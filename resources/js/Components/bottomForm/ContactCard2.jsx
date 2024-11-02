import React, { useState } from "react";

function ContactCard2({ back, setData, data, next }) {
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        company: "",
    });

    const validateInputs = () => {
        let isValid = true;
        let errorMessages = {};

        // Validate name
        if (!document.getElementById("name").value.trim()) {
            isValid = false;
            errorMessages.name = "Name is required";
        }

        // Validate email
        const email = document.getElementById("email").value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            isValid = false;
            errorMessages.email = "Invalid email address";
        }

        setErrors(errorMessages);

        return isValid;
    };

    const handleNext = (e) => {
        e.preventDefault();

        if (validateInputs()) {
            next();
            console.log();
        }
    };

    return (
        <form>
            <h1 className="text-black text-3xl font-bold font-header md:text-3xl">
                What would you like to do?
            </h1>
            <div className="py-10">
                <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={data.name}
                    onChange={(e) => setData("name", e.target.value)}
                    className="pl-0 input bg-transparent  border-b-black rounded-none w-full focus:border-b-black focus:outline-none focus:border-b text-3xl text-black"
                />
                {errors.name && (
                    <p className="text-red-500 mt-2">{errors.name}</p>
                )}
            </div>

            <div className="pb-10">
                <input
                    id="email"
                    type="text"
                    placeholder="Your email address"
                    onChange={(e) => setData("email", e.target.value)}
                    value={data.email}
                    className="pl-0 input bg-transparent  border-b-black rounded-none w-full focus:border-b-black focus:outline-none focus:border-b text-3xl text-black"
                />
                {errors.email && (
                    <p className="text-red-500 mt-2">{errors.email}</p>
                )}
            </div>

            <input
                id="companyName"
                type="text"
                placeholder="Company name"
                onChange={(e) => setData("company", e.target.value)}
                value={data.company}
                className="pl-0 input bg-transparent  border-b-black rounded-none w-full focus:border-b-black focus:outline-none focus:border-b text-3xl text-black"
            />
            <div className="pt-20 flex justify-between">
                <button
                    onClick={() => back()}
                    className="btn btn-outline rounded-full px-7 text-lg"
                >
                    Back
                </button>
                <button
                    onClick={handleNext}
                    className="btn rounded-full px-7 text-lg"
                >
                    Next
                </button>
            </div>
        </form>
    );
}

export default ContactCard2;
