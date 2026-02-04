import express from "express";
import * as threatreController from "../controllers/threatre.controller.js";
import { validateThreatreCreateRequest } from "../middlewares/threatre.middleware.js";

const router = express.Router();

router.post("/", validateThreatreCreateRequest, threatreController.create);
router.get("/", threatreController.getAllThreatre);
router.get("/:id", threatreController.getThreatre);
router.delete("/:id", threatreController.deleteThreatre);

export default router;
