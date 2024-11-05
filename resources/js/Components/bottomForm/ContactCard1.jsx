import React, { useCallback } from "react";

function ContactCard1({ nextPage, data, setCheckedItems }) {
    const handleCheckboxChange = useCallback((event) => {
        const { name, checked } = event.target;

        let arrValue = [];
        arrValue = data.checkedItems;
        if (checked && !data.checkedItems.includes(name)) {
            arrValue.push(name);

            setCheckedItems("checkedItems", arrValue);
            return;
        }

        const index = data.checkedItems.indexOf(name);
        if (index !== -1) {
            arrValue.splice(index, 1);
            setCheckedItems("checkedItems", arrValue);
        }
    }, []);

    return (
        <div>
            <h1 className="text-black text-3xl font-bold font-header md:text-4xl ">
                Lets Talk
            </h1>
            <h1 className="text-black text-3xl font-bold font-header md:text-4xl">
                What would you like to do?
            </h1>
            <div className="form-control items-start">
                <label className="label cursor-pointer ">
                    <input
                        type="checkbox"
                        name="Brand Design"
                        onChange={handleCheckboxChange}
                        checked={
                            Array.isArray(data.checkedItems) &&
                            data.checkedItems.includes("Brand Design")
                        }
                        className="checkbox rounded-sm bg-transparent outline border-black outline-1 outline-black [--chkbg:theme(colors.black)] [--chkfg:black]"
                    />

                    <span className="label-text pl-4 text-[#020306] text-2xl">
                        Brand Design
                    </span>
                </label>
                <label className="label cursor-pointer ">
                    <input
                        type="checkbox"
                        checked={
                            Array.isArray(data.checkedItems) &&
                            data.checkedItems.includes("Product Design")
                        }
                        name="Product Design"
                        onChange={handleCheckboxChange}
                        className="checkbox rounded-sm bg-transparent outline border-black outline-1 outline-black [--chkbg:theme(colors.black)] [--chkfg:black]"
                    />

                    <span className="label-text pl-4 text-[#020306] text-2xl">
                        Product Design
                    </span>
                </label>
                <label className="label cursor-pointer ">
                    <input
                        type="checkbox"
                        name="Web & Mobile Development"
                        onChange={handleCheckboxChange}
                        checked={
                            Array.isArray(data.checkedItems) &&
                            data.checkedItems.includes(
                                "Web & Mobile Development"
                            )
                        }
                        className="checkbox rounded-sm bg-transparent outline border-black outline-1 outline-black [--chkbg:theme(colors.black)] [--chkfg:black]"
                    />

                    <span className="label-text pl-4 text-[#020306] text-2xl">
                        Web & Mobile Development
                    </span>
                </label>
            </div>

            <div className="flex justify-end">
                <button
                    className="btn rounded-full px-7 text-white text-xl font-semibold font-header"
                    onClick={() => nextPage((prev) => prev + 1)}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default ContactCard1;
