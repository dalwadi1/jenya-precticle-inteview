import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from './product.action'

const Product = () => {
    const dispatch = useDispatch()
    const { products } = useSelector((state) => state.products)
    console.log(products);


    useEffect(() => {
        dispatch(getProducts())
    }, [])

    return (
        <div className='flax flex-col gap-4'>
            <div className='flex items-center justify-between px-5 py-4'>
                <h3>Product List</h3>
                <button className='cursor-pointer'>Add Product</button>
            </div>
            <div className='shadow-2xl px-5 py-4 w-full'>
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th scope="col">title</th>
                            <th scope="col">category</th>
                            <th scope="col">price</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.length > 0 && products.map((product) => <tr key={product?.id} className=''>
                                <th scope="row">{product?.title}</th>
                                <td>{product?.category}</td>
                                <td>{product?.price}</td>
                                <td></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Product
