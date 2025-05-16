import Link from 'next/link'

export default function Navbar(){
    return (
        <nav className="bg-white shadow-md">
            <div className='container mx-auto px-4 py-3 flex justify-between items-center'>
                <ul className='flex space-x-4'>
                    <li>
                        <Link href="/product" className='text-gray-700 hover:text-black'>Product</Link>
                    </li>

                    <li>
                        <Link href="/cart" className='text-gray-700 hover:text-black'>cart</Link>
                    </li>

                    <li>
                        <Link href="/checkout" className='text-gray-700 hover:text-black'>checkout</Link>
                    </li>

                    
                </ul>
            </div>
        </nav>
    )
}