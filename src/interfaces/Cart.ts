import Product from './Product';

export default interface ICart {
    items: Product[],
    totalItems: number,
    totalPrice: number
}
