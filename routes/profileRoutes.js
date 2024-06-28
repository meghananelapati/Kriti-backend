const express = require("express");
const profilecontroller = require("../Contoller/profilecontroller");
const router = express.Router();

router.get("/por", profilecontroller.por_index);
router.get("/skills", profilecontroller.skill_index);
router.get("/projects", profilecontroller.project_index);
router.post("/projects", profilecontroller.project_create);
router.post("/por", profilecontroller.por_create);
router.post("/skills", profilecontroller.skill_create);
router.get("/projects/:id", profilecontroller.project_details);
router.delete("/por/:id", profilecontroller.por_delete);
router.delete("/skills/:id", profilecontroller.skill_delete);
router.delete("/projects/:id", profilecontroller.project_delete);

module.exports = router;
