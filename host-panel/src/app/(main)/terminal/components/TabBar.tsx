import { PlusCircleIcon } from "lucide-react";

interface TabBarProps {
    tabs: any[],
    addTab: () => void,
    removeTab: (index: number) => void,
    setActiveTab: React.Dispatch<React.SetStateAction<number>>,
    activeTab: number
}
const TabBar = ({ tabs, addTab, removeTab, setActiveTab, activeTab }: TabBarProps) => {
    return (
        <div className="flex bg-purple-50 text-white p-2">
            {tabs.map((tab: any, index: any) => (
                <div
                    key={index}
                    className="cursor-pointer"
                    onClick={() => setActiveTab(index)}
                >
                    <span
                        className={`inline-flex items-center justify-center rounded-full  ${activeTab === index ? ' bg-purple-100 px-2.5 py-0.5 text-purple-700' : ' bg-gray-200 px-2.5 py-0.5 text-gray-800   dark:bg-neutral-500/20 dark:text-neutral-400'}`}
                    >
                        <p className="whitespace-nowrap text-sm"> Terminal {index + 1}</p>
                        {activeTab !== 0 && <button className="-me-1 ms-1.5 inline-block rounded-full bg-purple-200 p-0.5 text-purple-700 transition hover:bg-purple-300" >


                            <svg
                                onClick={(e) => { e.stopPropagation(); removeTab(index); }}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-3 w-3"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>}

                    </span>

                </div>
            ))}
            <PlusCircleIcon color="teal" className="inline-block text:teal-800 rounded-full hover:text:teal-300 ml-auto" onClick={addTab} />

        </div>
    );
};

export default TabBar;
