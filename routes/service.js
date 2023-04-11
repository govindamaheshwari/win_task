const express=require('express')

const router = express.Router();

const authorization=require('../middleware/authorization')

const serviceController=require('../controllers/service')


router.post('/addservice', serviceController.createService);





module.exports = router;