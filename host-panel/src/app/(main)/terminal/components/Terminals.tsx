"use client";
import { useSockets } from '@/hooks/use-sockets';
import { SOCKET_TERMINAL_EVENTS } from '@/lib/sockets/socket-constants';
// src/LogTerminal.tsx
import React, { useEffect, useState, useRef, KeyboardEvent, MouseEvent, ClipboardEvent, useCallback } from 'react';

type LogLevel = 'info' | 'warning' | 'error';

export interface Log {
  level: LogLevel;
  message: string;
}

const suggestions = [
  'start',
  'stop',
  'restart',
  'status',
  'connect',
  'disconnect',
  'help',
  'clear',
];
type LogTerminalType = {
  activeTab: number
  index: number
  initialLogs: Log[]
  setTerminalLogs: React.Dispatch<React.SetStateAction<Record<`terminal-${number}`, Log[]>>>
}
const LogTerminal: React.FC<LogTerminalType> = ({ activeTab, initialLogs, setTerminalLogs }) => {

  const { socket } = useSockets()
  const preDefinedName = "mulayam@172-168-25-1:"
  const [input, setInput] = useState<string>('');
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [oldCommands, setOldCommands] = useState<string[]>([]);
  const [activeSuggestion, setActiveSuggestion] = useState<number>(0);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const [inputPosition, setInputPosition] = useState<{ top: number, left: number }>({ top: 0, left: 0 });
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [cursorPosition, setCursorPosition] = useState<number>(0);


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

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = event.target.value;
    setInput(userInput);
    setCursorPosition(userInput.length);
    setFilteredSuggestions([...oldCommands, userInput])
    const filtered = suggestions.filter(
      suggestion =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    setFilteredSuggestions(filtered);
    setActiveSuggestion(0);
    updateInputPosition();
    setShowSuggestions(true);
  };
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && input.trim()) {
      if (input === "cls" || input === "clear") {
        setInput("");
        setTerminalLogs((prev) => ({ ...prev, [`terminal-${activeTab}`]: [] }))
        return
      }

      setTerminalLogs((prev) => ({ ...prev, [`terminal-${activeTab}`]: [...prev[`terminal-${activeTab}`], { level: 'info', message: `${preDefinedName} ${input}` }] }))
      setInput("");
      setCursorPosition(0);
      setShowSuggestions(false);
      socket.emit(SOCKET_TERMINAL_EVENTS.SEND_COMMAND, { activeTab, command: input });

    } else if (event.key === 'ArrowUp') {

      if (activeSuggestion === 0) {
        return;
      }
      setActiveSuggestion(activeSuggestion - 1);
    } else if (event.key === 'ArrowDown') {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }
      setActiveSuggestion(activeSuggestion + 1);
    } else if (event.key === 'Tab') {
      if (filteredSuggestions.length > 0) {
        event.preventDefault();
        setInput(filteredSuggestions[activeSuggestion]);
        setCursorPosition(filteredSuggestions[activeSuggestion].length);
        setShowSuggestions(false);
      }
    }
  };
  const handleRightClick = async (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    const selectedText = window.getSelection()?.toString();
    if (selectedText) {
      await navigator.clipboard.writeText(selectedText);
    } else {
      const textFromClipboard = await navigator.clipboard.readText();
      if (inputRef.current) {
        setInput(input + textFromClipboard);
        inputRef.current.focus();
        setCursorPosition((input + textFromClipboard).length);
      }
    }
  };
  const handleClick = (event: MouseEvent<HTMLLIElement>) => {
    setInput(event.currentTarget.innerText);
    setFilteredSuggestions([]);
    setShowSuggestions(false);
    setCursorPosition(event.currentTarget.innerText.length);
  };


  const updateInputPosition = useCallback(() => {
    if (inputRef.current) {
      const { top, left } = inputRef.current.getBoundingClientRect();
      setInputPosition({ top: top + window.scrollY, left: left + window.scrollX });
    }
  }, [inputRef]);

  // Listen for new Logs changes
  useEffect(() => {
    socket.on(SOCKET_TERMINAL_EVENTS.RECIEVE_COMMAND, (data) => {
      const [newLog, currentTerminal] = JSON.parse(data)
      setTerminalLogs((prev) => ({ ...prev, [`terminal-${currentTerminal}`]: [...prev[`terminal-${currentTerminal}`], newLog] }))
    });
    return () => {
      socket.off(SOCKET_TERMINAL_EVENTS.RECIEVE_COMMAND)
    };
  }, [setTerminalLogs, socket]);
  
  useEffect(() => {
    window.addEventListener('resize', updateInputPosition);
    return () => window.removeEventListener('resize', updateInputPosition);
  }, [updateInputPosition]);

  // Auto-scroll to the bottom when logs update
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [initialLogs]);
  return (
    <div className="bg-black text-white p-4 rounded-lg h-[420px] overflow-y-auto font-mono relative custom-scrollbar" onContextMenu={handleRightClick}>
      <div ref={terminalRef}>
        {initialLogs.map((log, index) => (
          <div key={index} className={`whitespace-pre-line ${getLogColor(log.level)}`}>
            {log.message}
          </div>
        ))}
      </div>
      {/* {showSuggestions && input && filteredSuggestions.length > 0 && (
        <ul
          className="absolute bg-transparent text-white list-none p-0 mt-1 border  rounded w-48 max-h-40 overflow-y-auto z-10"
          // style={{  bottom: `calc(100% + 8px)`, left: inputPosition.left + 8 }}
        >
          {filteredSuggestions.map((suggestion, index) => (
            <li
              key={suggestion}
              className={`cursor-pointer p-2 ${index === activeSuggestion ? 'bg-transparent' : ''}`}
              onClick={handleClick}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )} */}
      <div className="flex ">
        <span className="text-green-500">{`${preDefinedName} `}</span>
        <div className="relative flex-1  ">
          <input
            className="bg-transparent text-white outline-none flex-1 relative pr-2 w-[100%] cursor-text"
            type="text"
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            autoFocus
            ref={inputRef}
          />
          <span
            className="absolute top-0 left-0 h-full w-2 bg-current animate-blink  cursor-text"
            style={{ left: `${cursorPosition}ch` }}
          />
        </div>
      </div>

    </div>
  );
};

export default LogTerminal;

