import { React, useState } from "react";
import ContactCard1 from "@/Components/bottomForm/ContactCard1";
import ProgressFull from "@/Components/ProgressFull";
import ProgressEmpty from "@/Components/ProgressEmpty";
import ContactCard2 from "@/Components/bottomForm/ContactCard2";
import ContactCard3 from "@/Components/bottomForm/ContactCard3";
import { useForm } from "@inertiajs/react";
import { toast } from "react-toastify";
function ContactFormMain() {
    const [currentStage, setCurrentStage] = useState(1);

    const { data, setData, post, reset } = useForm({
        name: "",
        email: "",
        company: "",
        checkedItems: [],
        aboutBusiness: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post("contact/create", {
            preserveScroll: true,
            onSuccess: (data) => {
                reset();
                setCurrentStage(1);
                toast.success("Message sent");
            },
            onError: (err) => toast.error("unable to send message"),
        });
        // setData("checkedItems", data.checkedItems.toString());
        // setData("aboutBusiness", data.aboutBusiness);
    };

    return (
        <div className="card-body bg-[#F4E8D7] w-full max-w-lg rounded-md text-start mt-12 md:mt-0">
            <div className="flex justify-between gap-2">
                <ProgressFull />
                {currentStage > 1 ? <ProgressFull /> : <ProgressEmpty />}
                {currentStage > 2 ? <ProgressFull /> : <ProgressEmpty />}
            </div>
            {currentStage === 1 && (
                <ContactCard1
                    nextPage={setCurrentStage}
                    data={data}
                    setCheckedItems={setData}
                />
            )}
            {currentStage === 2 && (
                <ContactCard2
                    back={() => setCurrentStage((prev) => prev - 1)}
                    setData={setData}
                    data={data}
                    next={() => setCurrentStage((prev) => prev + 1)}
                />
            )}
            {currentStage === 3 && (
                <ContactCard3
                    back={() => setCurrentStage((prev) => prev - 1)}
                    data={data}
                    setData={setData}
                    next={handleSubmit}
                />
            )}
        </div>
    );
}

export default ContactFormMain;
