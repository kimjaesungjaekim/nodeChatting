import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import "dotenv/config";

import routes from "./app/routes/routes.js";

const app = express();

/*
 * App Configuration
 */

app.use("/uploads", express.static("uploads"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);
app.use(morgan("combined")); // morgan 사용하기

app.use((err, req, res, next) => {
  if (err && err.name === "UnauthorizedError") {
    return res.status(401).json({
      code: 401,
      message: "missing authorization credentials",
    });
  } else if (err && err.errorCode) {
    res.status(err.errorCode).json(err.message);
  } else if (err) {
    res.status(500).json(err.message);
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.info(`server up on port ${PORT}`);
});
