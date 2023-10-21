const mongoose = require('mongoose');
const db = "mongodb+srv://user1:HFTGHEsrTYC8OJWt@cluster0.hvwapzz.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('MongoDB is Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;