import { Column, Entity, ManyToMany, PrimaryColumn } from "typeorm"
import { Client } from "./Client"
import { v4 as uuidV4 } from "uuid"

@Entity("payables")
class Payables {
  @PrimaryColumn()
  id: string

  @Column()
  status: "paid" | "waiting_funds"
  
  @Column()
  payment_date: Date
  
  @Column()
  value: number

  @ManyToMany(() => Client, (client) => client.payables)
  client: Client

  constructor() {
    if(!this.id) {
      this.id = uuidV4()
    }
  }
}

export { Payables }