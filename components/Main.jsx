import React from "react";
import Image from "next/image";

const Main = ({ props }) => {
    return (
        <div className="container mx-auto px-10 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-8 col-span-1 lg:col-start-3">
                    <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
                        <div className="flex justify-between items-center px-6 py-4">
                            <h4 className="text-sm">12 Out, 2022</h4>

                            <div className="flex items-center">
                                <h4 className="text-sm">4:35am</h4>
                            </div>
                        </div>
                        <div className="flex-v text-center justify-center items-center px-6 py-4">
                            <div>
                                <h4 className="text-sm block">Cidade</h4>
                            </div>
                            <div>
                                <h4 className="text-sm block">Ensolarado</h4>
                            </div>
                        </div>
                        <div className="w-full flex items-center justify-center">
                            <Image
                                src="/../public/sol.png"
                                alt=""
                                width="200px"
                                height="200px"
                            />
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="flex justify-center items-start text-center ">
                                <h1 className="text-8xl text-gray-700">30</h1>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                    <div className="flex justify-center w-full items-center text-center ">
                                        <p className="text-sm text-gray-700">
                                            25
                                        </p>
                                    </div>
                                    <div className="flex justify-center w-full items-center text-center ">
                                        <p className="text-sm text-gray-700">
                                            26
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full text-center">
                                <table className="table-fixed">
                                    <tbody>
                                        <tr>
                                            <td className="text-center">
                                                sunrise
                                            </td>
                                            <td className="text-center">
                                                tabela
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">
                                                tabela
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
