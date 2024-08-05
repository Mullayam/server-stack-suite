import React from 'react'
import { Terminal } from '@xterm/xterm';
import "@xterm/xterm/css/xterm.css";
type Terminal2Type = {
    activeTab: number
    index: number
}
const Terminal2 = ({activeTab,index}:Terminal2Type) => {
    const isRendered = React.useRef(false)
    const terminalRef = React.useRef<HTMLElement>()

    React.useEffect(() => {
      if (isRendered.current)  return
      isRendered.current = true
    
      const term = new Terminal({
        cursorBlink: true,
        cursorStyle: 'underline',
        fontSize: 14,
        cursorWidth: 1,
      })
      term.open(terminalRef.current)

      term.onData((data) => {
        // socket.emit("terminal:write", data);
      });
  
      function onTerminalData(data:any) {
        term.write(data);
      }
       
  
    //   socket.on("terminal:data", onTerminalData);
      
    }, [])
    
    return <div ref={terminalRef} id="terminal" />;
}

export default Terminal2
