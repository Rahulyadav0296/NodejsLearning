require("dotenv").config();
const connectDB = require("./db/index.js");
const app = require("./app.js");

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log("Server Connected at port: ", process.env.PORT);
    });
  })
  .catch((error) => console.error("Mongo DB connection failed: ", error));
