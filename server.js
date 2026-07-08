import app from "./app.js";
import connectDB from "./config/db.js";

async function startServer() {
  try {
    await connectDB();

    app.listen(3000, () => {
      console.log("Server is running on http://localhost:3000");
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
}

startServer();
