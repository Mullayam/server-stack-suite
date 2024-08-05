"use client";
import { useState ,Fragment} from 'react';
import TabBar from './components/TabBar';
import TerminalComponent, { Log } from './components/Terminals';
import { useSockets } from '@/hooks/use-sockets';

export default function Home() {
  const { isConnected } = useSockets()
  const [tabs, setTabs] = useState([{ id: 1 }]);
  const [activeTab, setActiveTab] = useState<number>(0);
  const [terminalLogs, setTerminalLogs] = useState<Record<`terminal-${number}`, Log[] | []>>({
    [`terminal-${activeTab}`]: []
  });

  const addTab = () => {
    setTabs([...tabs, { id: tabs.length + 1 }]);
    setTerminalLogs({ ...terminalLogs, [`terminal-${tabs.length}`]: [] });
    setActiveTab(tabs.length);
  };

  const removeTab = (index: number) => {
    setTabs(tabs.filter((tab, i) => i !== index));
    setActiveTab(index > 0 ? index - 1 : 0);
  };
  return (
    <div className="h-screen flex flex-col">

      {
        isConnected ? <Fragment>
          <TabBar
            tabs={tabs}
            addTab={addTab}
            removeTab={removeTab}
            setActiveTab={setActiveTab}
            activeTab={activeTab}
          />
          <div className="flex-grow mt-2">
            {tabs.map((tab, index) => (
              index === activeTab && <TerminalComponent setTerminalLogs={setTerminalLogs} initialLogs={terminalLogs[`terminal-${activeTab}`]} activeTab={activeTab} index={index} key={index} />
            ))}

          </div>
        </Fragment> :
          <div className="bg-black text-red-500 p-4 rounded-lg h-96 overflow-y-auto font-mono relative custom-scrollbar text-center">
            Unable to Connect to Terminal
          </div>
      }

    </div>
  );
}
