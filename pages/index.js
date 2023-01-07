import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import DropDown from "../components/DropDown";
import {
    countries,
    cities,
    states,
    districts,
    unions,
    zipCodes,
} from "../components/data";
import { useEffect, useState } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    const [selectValue, setSelectValue] = useState("");
    const [shippingAddress, setShippingAddress] = useState({
        name: "",
        country: { name: "", id: "" },
        state: { name: "", id: "" },
        district: { name: "", id: "" },
        city: { name: "", id: "" },
        union: { name: "", id: "" },
        zipCode: { name: "", id: "" },
        village: "",
        houseNumber: "",
        phone: "",
        fax: "",
    });
    const [country, setCountry] = useState({ name: "", id: "" });
    const [name, setName] = useState("");
    const [state, setState] = useState({ name: "", id: "" });
    const [district, setDistrict] = useState({ name: "", id: "" });
    const [city, setCity] = useState({ name: "", id: "" });
    const [union, setUnion] = useState({ name: "", id: "" });
    const [zipCode, setZipCode] = useState({ name: "", id: "" });
    const [village, setVillage] = useState("");
    const [houseNo, setHouseNo] = useState("");
    const [phone, setPhone] = useState("");
    const [fax, setFax] = useState("");
    const submitHandeler = () => {
        console.log(country, state);
    };
    const copyAddress = () => {
        setShippingAddress({
            ...shippingAddress,
            name,
            country: country,
            state: state,
            district: district,
            city: city,
            union: union,
            zipCode: zipCode,
            village,
            houseNumber: houseNo,
            phone,
            fax,
        });
    };
    useEffect(() => {}, [shippingAddress]);

    return (
        <div className="container m-auto  ">
            <div className="  flex justify-between  ">
                <div className="px-4 ">
                    <h1 className="uppercase font-bold">Billing address</h1>
                    <h1 className="capitalize font-bold text-[.8rem]">
                        attention
                    </h1>
                    <div className="space-y-2">
                        <input
                            type="text"
                            placeholder="Enter person/site name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className={`border-2 focus:outline-none p-1`}
                        />
                        <div>
                            <p>Country</p>
                            <DropDown
                                setValue={setCountry}
                                value={country}
                                data={countries}
                            />
                        </div>

                        <div
                            className={`${
                                country.id ? ` ` : `pointer-events-none`
                            }`}
                        >
                            <p>Division/State</p>
                            <DropDown
                                setValue={setState}
                                value={state}
                                data={
                                    states[country.id - 1]
                                        ? states[country.id - 1]
                                        : []
                                }
                            />
                        </div>

                        <div
                            className={`${
                                state.id ? ` ` : `pointer-events-none`
                            }`}
                        >
                            <p>District</p>
                            <DropDown
                                setValue={setDistrict}
                                value={district}
                                data={
                                    districts[state.id - 1]
                                        ? districts[state.id - 1]
                                        : []
                                }
                            />
                        </div>

                        <div
                            className={`${
                                district.id ? ` ` : `pointer-events-none`
                            }`}
                        >
                            <p>City/Thana</p>
                            <DropDown
                                setValue={setCity}
                                value={city}
                                data={
                                    cities[district.id - 1]
                                        ? cities[district.id - 1]
                                        : []
                                }
                            />
                        </div>

                        <div
                            className={`${
                                city.id ? ` ` : `pointer-events-none`
                            }`}
                        >
                            <p>Union</p>
                            <DropDown
                                setValue={setUnion}
                                value={union}
                                data={
                                    unions[city.id - 1]
                                        ? unions[city.id - 1]
                                        : []
                                }
                            />
                        </div>

                        <div
                            className={`${
                                union.id ? ` ` : `pointer-events-none`
                            }`}
                        >
                            <p>Zipcode</p>
                            <DropDown
                                setValue={setZipCode}
                                value={zipCode}
                                data={
                                    zipCodes[union.id - 1]
                                        ? zipCodes[union.id - 1]
                                        : []
                                }
                            />
                        </div>

                        <div>
                            <p>Village/street address</p>
                            <input
                                type="text"
                                placeholder="street/village"
                                value={village}
                                onChange={(e) => setVillage(e.target.value)}
                                className={`border-2 focus:outline-none p-1`}
                            />
                        </div>

                        <div>
                            <p>House/apartment no</p>
                            <input
                                type="text"
                                placeholder="House/apartment no"
                                value={houseNo}
                                onChange={(e) => setHouseNo(e.target.value)}
                                className={`border-2 focus:outline-none p-1`}
                            />
                        </div>

                        <div>
                            <p>Phone</p>
                            <input
                                type="text"
                                placeholder="Phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className={`border-2 focus:outline-none p-1`}
                            />
                        </div>

                        <div>
                            <p>Fax</p>
                            <input
                                type="text"
                                placeholder="Fax"
                                value={fax}
                                onChange={(e) => setFax(e.target.value)}
                                className={`border-2 focus:outline-none p-1`}
                            />
                        </div>
                    </div>
                </div>

                <div className="px-4 ">
                    <h1 className="uppercase font-bold">
                        Shipping address{" "}
                        <span
                            onClick={copyAddress}
                            className="text-green-500 text-[.6rem] cursor-pointer"
                        >
                            copy billing address
                        </span>{" "}
                    </h1>
                    <h1 className="capitalize font-bold text-[.8rem]">
                        attention
                    </h1>
                    <div className="space-y-2">
                        <input
                            type="text"
                            placeholder="Enter person/site name"
                            value={shippingAddress.name}
                            onChange={(e) => setName(e.target.value)}
                            className={`border-2 focus:outline-none p-1`}
                        />
                        <div>
                            <p>Country</p>
                            <DropDown
                                setValue={setCountry}
                                value={shippingAddress.country}
                                data={countries}
                            />
                        </div>

                        <div
                            className={`${
                                country.id ? ` ` : `pointer-events-none`
                            }`}
                        >
                            <p>Division/State</p>
                            <DropDown
                                setValue={setState}
                                value={shippingAddress.state}
                                data={
                                    states[country.id - 1]
                                        ? states[country.id - 1]
                                        : []
                                }
                            />
                        </div>

                        <div
                            className={`${
                                state.id ? ` ` : `pointer-events-none`
                            }`}
                        >
                            <p>District</p>
                            <DropDown
                                setValue={setDistrict}
                                value={shippingAddress.district}
                                data={
                                    districts[state.id - 1]
                                        ? districts[state.id - 1]
                                        : []
                                }
                            />
                        </div>

                        <div
                            className={`${
                                district.id ? ` ` : `pointer-events-none`
                            }`}
                        >
                            <p>City/Thana</p>
                            <DropDown
                                setValue={setCity}
                                value={shippingAddress.city}
                                data={
                                    cities[district.id - 1]
                                        ? cities[district.id - 1]
                                        : []
                                }
                            />
                        </div>

                        <div
                            className={`${
                                city.id ? ` ` : `pointer-events-none`
                            }`}
                        >
                            <p>Union</p>
                            <DropDown
                                setValue={setUnion}
                                value={shippingAddress.union}
                                data={
                                    unions[city.id - 1]
                                        ? unions[city.id - 1]
                                        : []
                                }
                            />
                        </div>

                        <div
                            className={`${
                                union.id ? ` ` : `pointer-events-none`
                            }`}
                        >
                            <p>Zipcode</p>
                            <DropDown
                                setValue={setZipCode}
                                value={shippingAddress.zipCode}
                                data={
                                    zipCodes[union.id - 1]
                                        ? zipCodes[union.id - 1]
                                        : []
                                }
                            />
                        </div>

                        <div>
                            <p>Village/street address</p>
                            <input
                                type="text"
                                placeholder="street/village"
                                value={shippingAddress.village}
                                onChange={(e) => setVillage(e.target.value)}
                                className={`border-2 focus:outline-none p-1`}
                            />
                        </div>

                        <div>
                            <p>House/apartment no</p>
                            <input
                                type="text"
                                placeholder="House/apartment no"
                                value={shippingAddress.houseNo}
                                onChange={(e) => setHouseNo(e.target.value)}
                                className={`border-2 focus:outline-none p-1`}
                            />
                        </div>

                        <div>
                            <p>Phone</p>
                            <input
                                type="text"
                                placeholder="Phone"
                                value={shippingAddress.phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className={`border-2 focus:outline-none p-1`}
                            />
                        </div>

                        <div>
                            <p>Fax</p>
                            <input
                                type="text"
                                placeholder="Fax"
                                value={shippingAddress.fax}
                                onChange={(e) => setFax(e.target.value)}
                                className={`border-2 focus:outline-none p-1`}
                            />
                        </div>
                    </div>
                    <button onClick={submitHandeler}>submit</button>
                </div>
            </div>
        </div>
    );
}
