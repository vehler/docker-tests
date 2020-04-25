import { Request, Response, Router } from 'express';


export const home = Router()
    .get('/', (req: Request, res: Response) => res.send('Hello from home'));
