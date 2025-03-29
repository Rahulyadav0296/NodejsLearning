const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(process.env.MONGO_URL);
    console.log(`\n MongoDB Connected!: ${connectionInstance.connection.host}`); // response come as object
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;
