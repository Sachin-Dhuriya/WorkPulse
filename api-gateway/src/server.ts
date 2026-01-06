import app from "./app";
import { env } from "./config/env";

app.listen(env.PORT, () => {
  console.log(`API gateway running on port ${env.PORT}`);
});
