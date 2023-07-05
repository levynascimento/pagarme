import "dotenv/config"
import "reflect-metadata"
import { DataSource, DataSourceOptions } from "typeorm"

const port = process.env.DB_PORT as unknown as number | undefined

const options: DataSourceOptions = {
  type: "postgres",
  host: process.env.DB_HOST,
  port: port,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false,
  logging: false,
}

const dataSource = new DataSource(options)

export function createConnection(host = 'database_pagarme'): Promise<DataSource> {
  return dataSource.setOptions({ host }).initialize()
}

export {dataSource}