const express = require('express');
const router = express.Router();

router.get('/checkout', function (req: express.Request, res: express.Response) {

    res.render('pages/checkout', {
        title: 'Checkout',
    });
});

module.exports = router;
