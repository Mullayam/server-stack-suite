"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Editor } from "./Editor";

interface Tab {
  id: number;
  label: string;
  content: React.ReactNode;
}

export const FileTabs: React.FC = () => {
  const [tabs, setTabs] = useState<Tab[]>([
    { id: 1, label: 'page.jsx',content: <Editor /> },
  ]);
  const [activeTab, setActiveTab] = useState<number>(0);

  const addTab = () => {
    if (tabs.length < 10) {
      const newTab = { id: tabs.length + 1, label: `Tab ${tabs.length + 1}`, content: <Editor /> };
      setTabs([...tabs, newTab]);
      setActiveTab(tabs.length);
    }
  };

  const removeTab = (index: number) => {
    const newTabs = tabs.filter((_, i) => i !== index);
    setTabs(newTabs);
    if (activeTab >= newTabs.length) {
      setActiveTab(newTabs.length - 1);
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex text-white  gap">
        {tabs.map((tab, index) => (
          <div
            key={tab.id}
            className={`p-1 cursor-pointer ${activeTab === index ? 'bg-gray-100  text-zinc-500 border-b-2 border-b-orange-600' : 'bg-gray-100  text-zinc-500'}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
            <button
              onClick={(e) => {
                e.stopPropagation();
                removeTab(index);
              }}
              className="ml-2 text-red-500"
            >
              x
            </button>
          </div>
        ))}
        {tabs.length < 10 && (
          <button className="px-2 bg-green-600 ml-auto" onClick={addTab}>
            +
          </button>
        )}
      </div>
      <div className="flex-grow relative overflow-hidden">
        <AnimatePresence >
          {tabs.map((tab, index) =>
            index === activeTab ? (
              <motion.div
                key={tab.id}
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                {tab.content}
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

