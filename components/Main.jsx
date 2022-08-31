import React from "react";
import Image from "next/image";
import moment from "moment";

const Main = ({ props }) => {
    console.log(props.main.temp);
    return (
        <div className="container mx-auto px-10 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-8 col-span-1 lg:col-start-3">
                    <div className="bg-white shadow-lg rounded-lg p-4 lg:p-8 pb-12 mb-8">
                        <div className="flex justify-between items-center ">
                            <h4 className="text-sm">
                                {moment(Date.now()).format("DD MMM, YYYY")}
                            </h4>

                            <div className="flex items-center">
                                <h4 className="text-sm">
                                    {moment(Date.now()).format("LT")}
                                </h4>
                            </div>
                        </div>
                        <div className="flex-v text-center justify-center items-center px-6 py-4 mb-8">
                            <div>
                                <h1 className="text-4xl text-indigo-400 font-light block">
                                    {props.name}
                                </h1>
                            </div>
                            <div>
                                <h2 className="text-lg text-gray-500 font-light block">
                                    {/* weather.map((item) => {return item.description}) */}
                                </h2>
                            </div>
                        </div>
                        <div className="w-full flex items-center justify-center mb-8">
                            <Image
                                src="/public/sol.png"
                                alt=""
                                width="150px"
                                height="150px"
                            />
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="flex-v justify-center items-center text-center ">
                                <div className="text-[12rem] leading-tight font-extralight text-gray-500 tracking-tighter">
                                    {Math.round(props.main.temp)}
                                    <span className="text-2xl text-start">
                                        &#8451;
                                    </span>
                                </div>
                                <div className="">
                                    <h4 className="text-sm text-gray-700">
                                        Sensação Térmica:{" "}
                                        <span className="text-2xl">
                                            {Math.round(props.main.feels_like)}
                                            &#8451;
                                        </span>
                                    </h4>
                                </div>
                            </div>
                            <div className="flex text-center justify-center items-center p-4">
                                <table className="border-collapse">
                                    <tbody>
                                        <tr>
                                            <td className="px-4 py-4">
                                                Umidade:
                                            </td>
                                            <td className="text-2xl text-gray-600 px-4 py-4">
                                                {props.main.humidity}%
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-4">
                                                Vento:
                                            </td>
                                            <td className="text-2xl text-gray-600 px-4 py-4">
                                                {props.wind.speed}km/h
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-4">
                                                Dir. Vento:
                                            </td>
                                            <td className="text-2xl text-gray-600 px-4 py-4">
                                                {props.wind.deg}°
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="flex justify-center items-center text-center my-8 ">
                            <span className="transition duration-500 ease transform hover:bg-slate-600 hover:text-white inline-block  text-lg font-medium rounded-full border-2 text-slate-800 px-8 py-3 cursor-pointer">
                                Atualizar
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
