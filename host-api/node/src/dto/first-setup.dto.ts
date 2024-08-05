

export class FirstSetupDTO {

    name: string
    email: string
    password: string
    pg_db_enabled?: boolean | false
    pg_db_config?: {
        DBHOST: string
        DBNAME: string
        DBUSER: string
        DBPASS: string
        DBPORT: number
        DIALECT:string
    }

}