const express=require('express')

const router = express.Router();

const authorization=require('../middleware/authorization')

const orderController=require('../controllers/orders')


router.get('/getallorders', authorization, orderController.getAllOrders);

router.get('/order', authorization, orderController.getOrderDetails);

router.post('/createorder', authorization, orderController.createOrder);

router.delete('/deleteorder', authorization, orderController.deleteOrder);





module.exports = router;