import app from "./app.js";
import connectDB from "./config/database.js";
import { PORTNUM } from "./config/env.js";
import{
  ACCESS_TOKEN_SECRET_KEY,
  REFRESH_TOKEN_SECRET_KEY,
  ACCESS_TOKEN_EXPIRES_IN,
  REFRESH_TOKEN_EXPIRES_IN
} from "./config/env.js";
const startServer = async () => {
    try {
      await connectDB();
      app.listen(PORTNUM, () => {
        console.log(`Server is running on port ${PORTNUM}`);
        console.log(ACCESS_TOKEN_SECRET_KEY)
        console.log(REFRESH_TOKEN_SECRET_KEY)
        console.log(ACCESS_TOKEN_EXPIRES_IN)
        console.log(REFRESH_TOKEN_EXPIRES_IN)
      });
    } catch (error) {
      console.error("Error starting the server:", error);
    }
  };
  
  startServer();
