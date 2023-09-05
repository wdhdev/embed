const express = require("express");
const app = express();

require("dotenv").config();
const port = 80;

const Sentry = require("@sentry/node");
const bodyParser = require("body-parser");
const cors = require("cors");

Sentry.init({
    dsn: process.env.sentry_dsn,
    integrations: [
        new Sentry.Integrations.Http({ tracing: true }),
        new Sentry.Integrations.Express({ app }),
        ...Sentry.autoDiscoverNodePerformanceMonitoringIntegrations()
    ],
    tracesSampleRate: 1.0
})

const router = require("./util/router");

app.use(Sentry.Handlers.requestHandler());
app.use(Sentry.Handlers.tracingHandler());

app.use(cors({ origin: "*" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs");

app.use("/", router);

app.use(Sentry.Handlers.errorHandler());

app.listen(port, () => {
    console.log(`Listening on Port: ${port}`);
})