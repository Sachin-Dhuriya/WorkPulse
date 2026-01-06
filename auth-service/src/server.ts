import app from "./app";
import { sequelize } from "./config/database";

const PORT = process.env.PORT || 4001;

(async () => {
  try {
    await sequelize.authenticate();
    console.log("DB connected");

    await sequelize.sync({ alter: true });

    app.listen(PORT, () => {
      console.log(`auth-service is running on port ${PORT}`);
    });
  } catch (err) {
    console.error("DB error:", err);
  }
})();
