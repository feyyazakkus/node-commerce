import ICartItem from './CartItem';


export default interface ICart {
    items: ICartItem[],
    totalItems: number,
    totalPrice: number
}
