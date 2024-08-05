"use client";
import { useSockets } from '@/hooks/use-sockets';
import { SOCKET_TERMINAL_EVENTS } from '@/lib/sockets/socket-constants';
// src/LogTerminal.tsx
import React, { useEffect, useState, useRef, KeyboardEvent, MouseEvent } from 'react';

type LogLevel = 'info' | 'warning' | 'error';

interface Log {
  level: LogLevel;
  message: string;
}


const LogTerminal: React.FC = () => {
  const [logs, setLogs] = useState<Log[]>([]);
  const { socket } = useSockets()
  const terminalRef = useRef<HTMLDivElement>(null);



  const getLogColor = (level: LogLevel): string => {
    switch (level) {
      case 'info':
        return 'text-green-500';
      case 'warning':
        return 'text-yellow-500';
      case 'error':
        return 'text-red-500';
      default:
        return 'text-white';
    }
  };

  useEffect(() => {
    socket.on(SOCKET_TERMINAL_EVENTS.RECIEVE_LOGS_ONLY, (data) => {
      const newLog = JSON.parse(data)
      setLogs(oldLogs => [...oldLogs, newLog]);
    });

    return () => {
      socket.off(SOCKET_TERMINAL_EVENTS.RECIEVE_LOGS_ONLY)
    };
  }, []);
  // Auto-scroll to the bottom when logs update
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [logs]);
  return (
    <div className="bg-black text-white p-4 rounded-lg h-96 overflow-y-auto font-mono">
      <div ref={terminalRef}>
        {logs.length > 0 ? logs.map((log, index) => (
          <div key={index} className={`whitespace-pre-line ${getLogColor(log.level)}`}>
            {log.message}
          </div>
        )) : <div className="text-white text-center">Checking for New Logs ...</div>}
      </div>

    </div>
  );
};

export default LogTerminal;

