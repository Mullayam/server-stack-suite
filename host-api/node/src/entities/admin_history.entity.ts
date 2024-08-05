import { Entity, Column} from "typeorm"
import { CommonEntity } from "./common"

@Entity("admin_history")
export class AdminHistoryEntity extends CommonEntity {


    @Column({ nullable: true })
    data!: string

    @Column({ nullable: true })
    lastLogin!: string

    @Column("simple-json", { nullable: true })
    loginHistory!: {
        dateTime: string
        ip: string | string[]
    }[]   


}