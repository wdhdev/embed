import "./instrument";
import express from "express";
const app = express();

require("dotenv").config();
const port = process.env.port || 80;

import * as Sentry from "@sentry/node";
import bodyParser from "body-parser";
import cors from "cors";

import router from "./util/router";

app.use(cors<express.Request>({ origin: "*" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs");

app.use("/", router);

Sentry.setupExpressErrorHandler(app);

app.listen(port, () => {
    console.log(`Listening on Port: ${port}`);
})
