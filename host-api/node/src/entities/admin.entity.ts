import { Entity, Column, JoinColumn, OneToOne, OneToMany } from 'typeorm';
import { AdminHistoryEntity } from './admin_history.entity';
import { USER_STATUS } from '@app/common/constants/enum';
import { CommonEntity } from './common';
import { HostsEnitity } from './hosts.entity';



@Entity({ name: 'admin' })
export class AdminEntity extends CommonEntity {

    @Column()
    name: string;

    @Column({ unique: true })
    username: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column({ enum: USER_STATUS, default: USER_STATUS.INACTIVE })
    status: string;

    @Column({ default: false })
    isfirstlogin: boolean;

    @Column('json', { nullable: true })
    lastlogin: object[];
   

    @OneToOne(() => AdminHistoryEntity, { nullable: true, cascade: ["insert"], onDelete: "CASCADE", onUpdate: "NO ACTION" })
    @JoinColumn()
    history!: AdminHistoryEntity
    
    @OneToMany(() => HostsEnitity, (hosts) => hosts.user ,{ nullable: true, cascade: ["insert"], onDelete: "CASCADE", onUpdate: "NO ACTION" })
    hosts!: HostsEnitity[]


}