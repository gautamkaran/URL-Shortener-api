import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "URL Shortener API is running"
  });
});

app.use(express.json({ limit: "10kb" })); // form data
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(express.static("public"));

// routers import
import urlRouter from "./routes/url.routes.js";

// routers declaration
app.use("/", urlRouter);

export { app };
