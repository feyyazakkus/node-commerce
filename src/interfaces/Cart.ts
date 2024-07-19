import IProduct from './Product';

export default interface ICart {
    items: IProduct[],
    totalItems: number,
    totalPrice: number
}
