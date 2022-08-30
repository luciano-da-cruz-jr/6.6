import { Router, Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';

const statusRoute = Router();

statusRoute.get('/status', (eq: Request, res: Response, next: NextFunction) => {
    res.sendStatus(StatusCodes.OK);
});

export default statusRoute;