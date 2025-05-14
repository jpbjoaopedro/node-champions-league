import { Router } from "express";
import * as PlayerController from "./controller/players-controller";

const router = Router();

router.get("/players", PlayerController.getPlayer)
router.get("/players/:id", PlayerController.getPlayerById)

router.post("/players", PlayerController.createPlayer)

export default router;