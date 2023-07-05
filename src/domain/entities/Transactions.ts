import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn } from "typeorm"
import { v4 as uuidV4 } from "uuid"
import { Client } from "./Client"

@Entity("transactions")
class Transactions {
  @PrimaryColumn()
  id: string
  
  @Column()
  value: number
  
  @Column()
  description: string
  
  @Column()
  payment_method: "debit_card" | "credit_card"
  
  @Column()
  card_number: number
  
  @Column()
  cardholder_name: string
  
  @Column()
  card_expiration_date: string
  
  @Column()
  cvv: number
  
  @ManyToOne(() => Client, (client) => client.transactions)
  client: Client

  @CreateDateColumn()
  created_at: Date
  
  constructor() {
    if(!this.id) {
      this.id = uuidV4()
    }
  }

}

export { Transactions } 