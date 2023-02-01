import React from "react";
import About from "./About";

const Tabs = () => {
    const [openTab, setOpenTab] = React.useState(1);
    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full">
                    <ul
                        className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                        role="tablist"
                    >
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center hover:bg-gray-200 dark:hover:bg-stone-800">
                            <a
                                className={
                                    "text-xs font-bold uppercase px-5 py-3 block leading-normal" +
                                    (openTab === 1
                                        ? "dark:text-white border-b-4 border-red-600"
                                        : "dark:text-gray-400 text-gray-500")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(1);
                                }}
                                data-toggle="tab"
                                href="#link1"
                                role="tablist"
                            >
                                Feed
                            </a>
                        </li>
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center hover:bg-gray-200 dark:hover:bg-stone-800">
                            <a
                                className={
                                    "text-xs font-bold uppercase px-5 py-3 block leading-normal " +
                                    (openTab === 2
                                        ? "dark:text-white border-b-4 border-red-600"
                                        : "dark:text-gray-400 text-gray-500")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(2);
                                }}
                                data-toggle="tab"
                                href="#link2"
                                role="tablist"
                            >
                                About
                            </a>
                        </li>
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center hover:bg-gray-200 dark:hover:bg-stone-800">
                            <a
                                className={
                                    "text-xs font-bold uppercase px-5 py-3 block leading-normal " +
                                    (openTab === 3
                                        ? "dark:text-white border-b-4 border-red-600"
                                        : "dark:text-gray-400 text-gray-500")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(3);
                                }}
                                data-toggle="tab"
                                href="#link3"
                                role="tablist"
                            >
                                Projects
                            </a>
                        </li>
                    </ul>
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6">
                        <div className="px-4 py-4 flex-auto">
                            <div className="tab-content tab-space">
                                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                    <p>
                                        Hello World!
                                    </p>
                                </div>
                                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                    <About />
                                </div>
                                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                                    <p>
                                        Hello World!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Tabs;