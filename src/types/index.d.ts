import * as session from 'express-session';
import ICart from '../interfaces/Cart';

declare module 'express-session' {
    export interface SessionData {
      cart: ICart;
    }
}
