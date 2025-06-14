import express from "express";

import chatRoute from "./chat.route.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "Server deployed successfully!" });
});
router.use("/chats", chatRoute);

export default router;