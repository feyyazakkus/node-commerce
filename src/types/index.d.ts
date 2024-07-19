import * as session from 'express-session';
import Cart from '../interfaces/Cart';

declare module 'express-session' {
    export interface SessionData {
      cart: Cart;
    }
}
