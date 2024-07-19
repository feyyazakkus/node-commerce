import { Router, Request, Response } from 'express';
const router = Router();

router.get('/checkout', function (req: Request, res: Response) {

    res.render('pages/checkout', {
        title: 'Checkout',
    });
});

module.exports = router;
