import { Request, Response } from 'express';

export default (req: Request, res: Response) => {
    res.status(404);
    res.render('pages/error', { title: '404' });
}
