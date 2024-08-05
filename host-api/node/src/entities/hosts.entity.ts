import { Entity, Column, OneToOne, ManyToOne, OneToMany, } from "typeorm"
import { CommonEntity } from "./common"
import { HOST_STATUS, HOST_TYPE } from "@app/common/constants/enum"
import { SSLCertificatesEnitity } from "./ssl_certificates.entity"
import { AdminEntity } from "./admin.entity"
import { ServerTypesEntity } from "./servers.entity"
import { Domain } from "@app/common/interface"

@Entity("hosts")
export class HostsEnitity extends CommonEntity {

    @Column("simple-array", {  array:true,})
    domains!: Domain[]

    @Column({ default: null,nullable:true })
    domain_name!: string

    @Column({ default: "/" })
    path!: string

    @Column()
    destination!: string

    @Column({ default: false })
    auto_ssl!: boolean

    @Column({ default: false })
    publicly_accessible!: boolean

    @Column({ default: HOST_STATUS.OFFLINE, enum: HOST_STATUS })
    status!: string

    @Column({ default: HOST_TYPE.PROXY, enum: HOST_TYPE })
    host_type!: string

    @Column({ default: false })
    websocket_support!: boolean

    @Column({ default: false })
    force_https_redirect!: boolean

    @Column({ default: false })
    has_custom_headers!: boolean

    @Column("simple-array", { default: null, nullable: true, })
    custom_headers!: Array<{ name: string, value: string }>

    @OneToMany(() => ServerTypesEntity, (st) => st.name)
    server_type!: ServerTypesEntity[]

    @OneToOne(() => SSLCertificatesEnitity, { nullable: true, cascade: ["insert"], onDelete: "CASCADE", onUpdate: "NO ACTION" })
    ssl!: SSLCertificatesEnitity

    @ManyToOne(() => AdminEntity, (user) => user.hosts, { nullable: true, })
    user!: AdminEntity


}