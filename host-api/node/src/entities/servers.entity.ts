import { Column, Entity, ManyToOne } from "typeorm";
import { CommonEntity } from "./common";
import { DEFAULT_STATUS } from "@app/common/constants/enum";
import { HostsEnitity } from "./hosts.entity";

@Entity({ name: 'server_types' })
export class ServerTypesEntity extends CommonEntity {

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    slug: string;

    @Column({ default: DEFAULT_STATUS.INACTIVE, enum: DEFAULT_STATUS })
    status: string

    @ManyToOne(() => HostsEnitity, (hosts) => hosts.server_type, { nullable: true, cascade: ["insert"], onDelete: "CASCADE", onUpdate: "NO ACTION" })
    hosts!: HostsEnitity
}