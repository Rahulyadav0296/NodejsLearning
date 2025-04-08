require("dotenv").config(); // Loads environment variables from a .env file
const connectDB = require("./db/index.js"); // MongoDB connection logic
const { app } = require("./app.js"); // Express app setup

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log("Server Connected at port: ", process.env.PORT);
    });
  })
  .catch((error) => console.error("Mongo DB connection failed: ", error));
