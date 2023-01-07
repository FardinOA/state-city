import React, { useEffect, useRef, useState } from "react";

const DropDown = ({ data, setValue, value }) => {
    const [dropDownOpen, setDropDownOpen] = useState(false);
    const [searchString, setSearchString] = useState(value.name);

    const finalData = data.filter(function (ele) {
        return ele.name.toLowerCase().indexOf(searchString.toLowerCase()) > -1;
    });
    useEffect(() => {
        setSearchString(value.name);
    }, [value.name]);

    return (
        <div className="">
            <div className="border-2 w-[13rem] p-1 relative">
                <input
                    type="text"
                    placeholder="Please search"
                    className="focus:outline-none "
                    value={searchString}
                    onChange={(e) => {
                        setSearchString(e.target.value);
                        setValue({ ...value, name: "" });
                    }}
                    onFocus={() => setDropDownOpen(true)}
                />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`w-4 h-4 absolute top-2 right-1  cursor-pointer ${
                        dropDownOpen ? "rotate-180" : ""
                    }`}
                    onClick={() => setDropDownOpen(!dropDownOpen)}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
                    />
                </svg>
            </div>
            {dropDownOpen && (
                <div className="w-[13rem] border-2 border-t-0 p-1 max-h-[10rem] overflow-auto">
                    {finalData.map((ele, ind) => (
                        <p
                            className="cursor-pointer"
                            onClick={() => {
                                setSearchString("");
                                setSearchString(ele.name);
                                setValue({ name: ele.name, id: ele.id });
                                setDropDownOpen(false);
                            }}
                            key={ele.id}
                        >
                            {ele.name}
                        </p>
                    ))}
                </div>
            )}
        </div>
    );
};

export default DropDown;
