type DatabaseConfig = {
    DBHOST: string
    DBNAME: string
    DBUSER: string
    DBPASS: string
    DBPORT: number
    DIALECT: string
}
type EnablePostgresDB = {
    pg_db_enabled: true
    pg_db_config: DatabaseConfig
}
type NoPostgresDB = {
    pg_db_enabled: false
    pg_db_config: never
}
export type FirstSetupConfiguration = {
    name: string
    email: string
    password: string
} & (EnablePostgresDB | NoPostgresDB)