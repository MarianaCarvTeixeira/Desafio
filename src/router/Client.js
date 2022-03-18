const { Router } = require("express");
const ClientController = require("../controller/ClientController");
const clientController = new ClientController();
const router = Router();

router.get("/", async (req, res) => {
  try {
    const result = await clientController.show();
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const result = await clientController.store(req.body);
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error);
  }
});
router.delete("/", async (req, res) => {
  try {
    const result = await clientController.deleteClient(req.body);
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;