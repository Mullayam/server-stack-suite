import { ChevronDownIcon, ClipboardIcon, Copy, PlusIcon, RefreshCwIcon } from 'lucide-react';
import React from 'react';

const FilesBarPanel: React.FC = () => {
  return (
    <div className="flex items-center bg-gray-200 text-slate-900 p-1">
      <div className="flex items-center">
        <ChevronDownIcon className="w-4 h-4 mr-1" />
        <span>HOST-PANEL</span>
      </div>
      <div className="flex items-center ml-auto space-x-4">
        <Copy className="w-5 h-5 cursor-pointer" />
        <PlusIcon className="w-5 h-5 cursor-pointer" />
        <RefreshCwIcon className="w-5 h-5 cursor-pointer" />
        <ClipboardIcon className="w-5 h-5 cursor-pointer" />
      </div>
    </div>
  );
};

export default FilesBarPanel;
