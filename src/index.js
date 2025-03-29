require("dotenv").config();
const express = require("express");
const connectDB = require("./db/index.js");
const cors = require("cors");

const app = express();
app.use(cors());
connectDB();
// (async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URL);
//     app.on("error", (error) => {
//       console.log("ERROR", error);
//       throw error;
//     });

//     app.listen(process.env.PORT || 5000, () => {
//       console.log("Server Connected on the port", process.env.PORT);
//     });
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// })();
