import express from "express";

import { chatCompletion } from "../controllers/chat.controller.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "Chat route working!" });
});
router.post("/", chatCompletion);

export default router;