import { createConnection } from "./typeorm/data-source"
import { app } from "./app"

const port = process.env.PORT as unknown as number | undefined

createConnection()

app.listen(port, () => console.log("Server is running!!"))


