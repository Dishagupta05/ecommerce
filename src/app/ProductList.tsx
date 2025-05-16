'use client'
import {Product} from "./Productdata"
import Image from 'next/image'
import Link from 'next/link';
import { useState } from "react";


export default function ProductList({products,initialCartProducts}:{products:Product[],initialCartProducts:Product[]}){
    const [cartProduct,setcartProduct] = useState(initialCartProducts)

    async function addToCart(productId:string){
        const response = await fetch('http://localhost:3000/api/User/2/cart',{
            method:'POST',
            body:JSON.stringify({
                productId,
            }),
            headers:{
                'Content-Type':'application/json',
            }
    });
    async function removeFromcart(productId:string){
        const response = await fetch('http://localhost:3000/api/User/2/cart',{
            method:'DELETE',
            body:JSON.stringify({
                productId,
            }),
            headers:{
                'Content-Type':'application/json',
            }
    });

    const updatedCartProducts = await response.json();
    setcartProduct(updatedCartProducts); 

    }

    function productIsInCart(productId:string){
        return cartProduct.some(cp=>cp.id===productId);
    }
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
            {products.map(product=>(
                <Link key={product.id} href={"/product/"+ product.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl p-4 transition duration-300 ease-in-out"
                >
                    <Image className="rounded-lg mb-4" src={'/' + product.imageUrl} alt="Product Image" width={150}
                     height={150} />
                    <h2 className="text-2xl font-bold">{product.name}</h2>
                    <p className="text-lg text-green-600 font-bold mt-2">${product.price}</p>
                    {productIsInCart(product.id)
                    ?
                    (<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
                        onClick={(e)=>{
                        e.preventDefault();
                        removeFromcart(product.id)
                    }}>Remove to cart</button>

                    ):(
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
                     onClick={(e)=>{
                        e.preventDefault();
                        addToCart(product.id);
                    }}>Add to cart</button>

                    )
                    }
                    
                </Link>
            ) )}
        </div>
    )
    }
}