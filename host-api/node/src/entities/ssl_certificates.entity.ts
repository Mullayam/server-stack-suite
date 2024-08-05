import { Entity, Column, OneToOne, JoinColumn } from "typeorm"
import { CommonEntity } from "./common"
import { SSL_STATUS } from "@app/common/constants/enum"
import { HostsEnitity } from "./hosts.entity"

@Entity("ssl_certificates")
export class SSLCertificatesEnitity extends CommonEntity {

    @Column("text")
    domain!: string

    @Column()
    provider!: string

    @Column()
    expires!: string

    @Column("simple-json")
    ssl_certificates!: {
        pk_key: string
        cert_key: string
    }

    @Column({ default: SSL_STATUS.INACTIVE, enum: SSL_STATUS })
    status!: string

    @OneToOne(() => HostsEnitity)
    @JoinColumn()
    ssl!: HostsEnitity

}