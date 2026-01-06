import express from "express";
import routes from "./routes";
import { authenticate } from "./middlewares/auth.middleware";
import { rateLimit } from "./middlewares/rateLimit.middleware";

const app = express();

app.use(rateLimit);
app.use(authenticate);
app.use(routes);

export default app;
