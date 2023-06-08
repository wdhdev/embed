const { Router } = require("express");

const router = Router();
const routes = require("./routes");

router.get("/", async (req, res) => {
    routes.index(req, res);
})

router.get("/embed", async (req, res) => {
    routes.embed(req, res);
})

module.exports = router;