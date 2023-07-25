const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handle");
require("dotenv").config();

//middleware
app.use(express.static("./public"));
app.use(express.json());
//Routes
app.use("/api/v1/tasks", tasks);
app.use(notFound);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    let connectStr = process.env.MONGO_URI;
    await connectDB(connectStr);
    app.listen(3000, () => {
      console.log("Task Manager App");
    });
  } catch (err) {
    console.log(err);
  }
};

start();
