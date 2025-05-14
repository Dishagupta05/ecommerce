import ProductList from "../ProductList";
import {products} from "../Productdata";


export default function ProductPage(){
    return(
        <>
        <h1>Product</h1>
        <ProductList products={products}/>
        </>

    )
}