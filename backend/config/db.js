import mongoose from "mongoose";

const db = () => {
  mongoose
    .connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      dbName: "e-commerce",
    })
    .then((e) => {
      console.log("connected");
    })
    .catch((e) => {
      console.log(e);
    });
};

export default db;
