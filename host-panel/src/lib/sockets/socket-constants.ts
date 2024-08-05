export enum SocketEventConstants {
    ServerClosed = "@@ServerClosed",
    WARNING = "@@WARNING",
    ERROR = "@@ERROR",
    INFO = "@@INFO",
    DEBUG = "@@DEBUG",
    SUCCESS = "@@SUCCESS"

   
}
export enum SOCKET_TERMINAL_EVENTS {
    SEND_COMMAND = "@@SEND_COMMAND",
    RECIEVE_COMMAND = "@@RECIEVE_COMMAND",
    RECIEVE_LOGS_ONLY= "@@RECIEVE_LOGS_ONLY",

 
}