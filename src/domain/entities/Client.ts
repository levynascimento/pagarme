import { OneToMany, PrimaryColumn } from "typeorm"
import { Transactions } from "./Transactions"
import { Payables } from "./Payables"
import { v4 as uuidV4 } from "uuid"

class Client {
  @PrimaryColumn()
  id: string

  @OneToMany(() => Transactions, (transactions) => transactions.client)
  transactions: Transactions[]

  @OneToMany(() => Payables, (payables) => payables.client)
  payables: Payables[]

  constructor() {
    if(!this.id) {
      this.id = uuidV4()
    }
  }
}

export { Client }