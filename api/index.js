// import express from "express";
// import cookieParser from "cookie-parser";
// import cors from "cors";
// import mongoose from "mongoose";
// import http from "http";

// import "dotenv/config";
// import serverless from "serverless-http";

// import routes from "../routes/index.js";

// const app = express();

// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());

// app.use("/api", routes);

// const port = process.env.PORT || 5000;
// const server = http.createServer(app);

// // mongoose.set("strictQuery", false);
// mongoose.connect(process.env.MONGODB_URL).then(() => {
//   console.log("Mongodb connected");
//   server.listen(port, () => console.log(`Server is listening on port ${port}`));
// }).catch((err) => {
//   console.log({ err });
//   process.exit(1);
// });
// api/index.js
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";
import routeV1 from "../routes/index.js";
import serverless from "serverless-http"; // ✅ required

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/api", routeV1);

// ✅ Only connect once and avoid using createServer
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log("MongoDB connected"))
  .catch(err => {
    console.error("MongoDB connection failed:", err.message);
  });

export const handler = serverless(app); // ✅ Export for Vercel




