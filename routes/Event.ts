import express, { Router } from "express";
import { RequestHandler } from "express";
import addEvent from "../controllers/Events";
import upload from "../middleware/upload";

const router: Router = express.Router();

router.post("/events", upload.array('images'), addEvent as RequestHandler);

export default router;
