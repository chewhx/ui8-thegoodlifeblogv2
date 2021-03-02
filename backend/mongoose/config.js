const mongoose = require("mongoose");

const mongooseDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGODBURI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(`Mongo connected: ${connection.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = mongooseDB;
