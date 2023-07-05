import { Column, Entity, PrimaryColumn } from "typeorm"
import { v4 as uuidV4 } from "uuid"

@Entity("balance")
class Balance {
  @PrimaryColumn()
  id: string

  @Column()
  available: number

  @Column()
  waiting_funds: number

  constructor() {
    if(!this.id) {
      this.id = uuidV4()
    }
  }
}

export { Balance }