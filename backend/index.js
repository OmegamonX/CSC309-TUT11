import express from "express";
import routes from "./routes.js";
// TODO: complete me (loading the necessary packages)
import cors from "cors";

const FRONTEND_URL = process.env.FRONTEND_URL || "https://frontend-production-98e73.up.railway.app";

const app = express();


// TODO: complete me (CORS)
app.use(cors({
    origin: FRONTEND_URL,
}));
app.use(express.json());
app.use('', routes);


export default app;
