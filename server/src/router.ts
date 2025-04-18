import { Router } from "express";

const router = Router();

// Routing
router.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

router.get("/nosotros", (req, res) => {
  res.json({ message: "Desde nosotros!" });
});

router.get("/contacto", (req, res) => {
  res.json({ message: "Desde contacto!" });
});

export default router;
