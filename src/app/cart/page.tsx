import ShoppingCartList from "./ShoppingCartList";
export default async function CartPage(){
    const response = await fetch('http://localhost:3000/api/User/2/cart',{
        cache:'no-cache',
    });
    const cartProduct = await response.json();

    return(
        <ShoppingCartList initialCartProducts={cartProduct}/>
    )
}