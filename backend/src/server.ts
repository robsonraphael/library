import express from "express";
import { router } from "./routes";
import cors from 'cors';

const app = express();
const port = process.env.PORT || 5050;

app.use(express.json())
app.use(cors())
app.use(router);

app.listen(port, () => console.log(`Server is running on Port:${port} 🚀🚀`));
process.on("SIGINT", () => console.log(`Server is closed 🤖🤖`));
