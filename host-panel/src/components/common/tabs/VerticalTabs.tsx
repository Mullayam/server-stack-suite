"use client";
import { useState } from 'react';

interface Tab {
  id: number;
  label: string;
  content: React.ReactNode;
}

interface VerticalTabsProps {
  tabs: Tab[];
}

 export const VerticalTabs: React.FC<VerticalTabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <div className="flex  p-4 bg-gray-50 border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-transparent dark:border-gray-700">
      <div className="w-1/4 bg-transparent  border-slate-200 border-r-2 p-2  dark:text-slate-100 text-slate-900">
        {tabs.map((tab, index) => (
          <div
            key={tab.id}
            className={`p-2 mt-2 rounded-lg cursor-pointer hover: ${activeTab === index ? 'dark:bg-zinc-700 bg-gray-300' : ' hover:text-gray-900  hover:bg-gray-200 w-full dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:hover:text-white'}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div className="w-3/4 p-4">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

 
