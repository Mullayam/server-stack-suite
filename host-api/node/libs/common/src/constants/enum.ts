export enum HOST_STATUS {
    ONLINE = 'ONLINE',
    OFFLINE = 'OFFLINE',
    DELETED = 'DELETED'
}
export enum ACCESS_TYPE {
    PUBLIC = 'PUBLIC',
    PRIVATE = 'PRIVATE',     
}

export enum HOST_TYPE {
    REDIRECTION = 'REDIRECTION',
    $404 = 'NOTFOUND',     
    STREAM = 'STREAM',     
    PROXY = 'PROXY',     
}
export enum SSL_STATUS  {
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE',
    EXPIRED="EXPIRED"  
}
export enum DEFAULT_STATUS {
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE',
}
export enum USER_STATUS {
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE',
    BANNED = 'BANNED',
    DELETED = 'DELETED',
    PENDING = 'PENDING',
    SUSPENDED = 'SUSPENDED',
    BLOCKED = 'BLOCKED'
}
export const USER_STATUS_AND_ERROR = {
    [USER_STATUS.INACTIVE]: "Your Account is Not Active,Please Verify Your Email",
    [USER_STATUS.BANNED]: "Your Account is Banned,Please Contact Administrator",
    [USER_STATUS.DELETED]: "No Account With This Email Found",
    [USER_STATUS.PENDING]: "Your Account is Pending,Please Wait For Approval",
    [USER_STATUS.SUSPENDED]: "Your Account is Suspended,Due to violation of Terms and Conditions",
    [USER_STATUS.BLOCKED]: "Your Account is Blocked,Due to Many Failed Login Attempts",
}
export enum PROCESSORS_QUEUE_NAME {
    EMAIL_PROCESSOR = 'process-email',
    HOST_PROCESSOR = 'process-hosts',


}