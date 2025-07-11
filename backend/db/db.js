const mongoose = require("mongoose");

const db = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Database Connected");
  } catch (error) {
    console.error("❌ Database Connection Error:", error.message);
    process.exit(1); // Stop the app if DB connection fails
  }
};

module.exports = { db };
