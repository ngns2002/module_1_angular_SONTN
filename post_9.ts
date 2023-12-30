// Define the Product type
type Product = {
    id: number;
    name: string;
    price: number;
    quantity: number;
};

let productsList: Product[] = [
    {id: 1, name: 'Product 1', price: 100, quantity: 10},
    {id: 2, name: 'Product 2', price: 200, quantity: 5},
    {id: 3, name: 'Product 3', price: 150, quantity: 8},
    {id: 4, name: 'Product 4', price: 120, quantity: 6},
    {id: 5, name: 'Product 5', price: 300, quantity: 4}
];

function getDiscountedProducts(products: Product[], discountRate: number): Product[] {
    return products.map(product => ({
        ...product,
        price: product.price - (product.price * discountRate),
    }));
}

const voucher  = getDiscountedProducts(productsList, 0.1);
console.log(voucher );
