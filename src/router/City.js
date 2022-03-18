const { Router } = require("express");
const CityController = require("../controller/CityController");
const cityController = new CityController();
const router = Router();

router.get("/",cityController.getCities);

router.post("/",cityController.store);

module.exports = router;
