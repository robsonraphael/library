import express from "express";
import { router } from "./routes";

const app = express();
const port = process.env.PORT || 3030;

app.use(express.json());
app.use(router);

app.listen(port, () => console.log(`Server is running on Port:${port} 🚀🚀`));
process.on("SIGINT", () => console.log(`Server is closed 🤖🤖`));
