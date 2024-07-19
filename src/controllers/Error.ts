import { Request, Response, NextFunction } from 'express';

module.exports = function(req: Request, res: Response, next: NextFunction) {
    res.status(404);
    res.render('pages/error', { title: '404' });
}
