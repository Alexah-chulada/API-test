const { Router } = require('express');
const router = Router();

router.get('/user', (req, res, next) => {
    res.send('This is a get request for user');
    console.log ('user route is working');
    next()

})

router.get('/product', (req, res, next) => {
    res.send('This is a get request for product');
    console.log ('product route is working');
    next()
})

module.exports = router;
