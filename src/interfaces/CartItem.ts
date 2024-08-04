import IProduct from './Product';

export default interface ICartItem {
    product_id: string,
    product: IProduct,
    quantity: number
}
