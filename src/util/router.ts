import { Router } from "express";

const router = Router();
import routes from "./routes";

router.get("/", async (req, res) => {
    routes.index(req, res);
})

router.get("/embed", async (req, res) => {
    routes.embed(req, res);
})

export default router;
