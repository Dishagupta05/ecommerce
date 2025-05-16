import ProductList from "../ProductList";
export const dynamic = 'force-dynamic';



export default async function ProductPage(){
    const response=await fetch('http://localhost:3000/api/products',{
        cache:'no-cache',
    });
    const products = await response.json();

    const response2 = await fetch('http://localhost:3000/api/User/2/cart',{
        cache:'no-cache',
    });
    const cartProduct = await response2.json(); 
    return(
        <div className="container mx-auto p-8">
            <h1 className="text-4xl font-bold mb-8">Product</h1>
            <ProductList products={products} initialCartProducts={cartProduct}/>
        </div>

    )
}   