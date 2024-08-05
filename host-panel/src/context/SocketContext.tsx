"use client"
import { socketAddListeners, socketRemoveListeners } from "@/lib/sockets/listeners";
import { appSocket } from "@/lib/sockets/socket";
import React, { PropsWithChildren } from "react";
import { Socket } from "socket.io-client";

export const SocketContext = React.createContext<{ socket: Socket, isConnected: boolean }>({ socket: appSocket, isConnected: false });
const SocketContextProvider = ({ children }: PropsWithChildren) => {
    const [isConnected, setIsConnected] = React.useState(false);
    React.useEffect(() => {

        appSocket.once("connect", () => setIsConnected(true))
        appSocket.on("disconnect", () => setIsConnected(false))
        appSocket.on("connection_error", () => setIsConnected(false));
        appSocket.connected && setIsConnected(true)
        socketAddListeners(appSocket);
        return () => socketRemoveListeners(appSocket)
    }, [isConnected])

    return (
        <SocketContext.Provider value={{ socket: appSocket, isConnected }}>
            {children}
        </SocketContext.Provider>
    )
}
export default SocketContextProvider