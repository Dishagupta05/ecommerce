import {products} from "@/app/Productdata"


export default function ProductDetailPage({params}:{params:{id:string}}){
    const product = products.find(p=>p.id===params.id);
    return <h1>{product!.name}</h1>
}