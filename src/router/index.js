const { Router } = require("express");
const City = require('./City');
const Client = require('./Client');

const router = Router();

router.use('/City', City);
router.use('/Client', Client);
router.get('/', async (req, res) => {
    res.send('api running!'); 
});

module.exports = router;