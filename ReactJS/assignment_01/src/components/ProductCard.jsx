import React from 'react';
import { BsFillStarFill } from "react-icons/bs";
import { LuHeart } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import AddToCartButton from './AddToCartButton';
import AddToWishlistButton from './AddToWishlistButton';

const ProductCard = ({ product, orientation = "vertical" }) => {

    if (orientation.toLocaleLowerCase().includes("vertical")) {
        return (
            <div className='p-4 bg-gray-50 rounded-2xl'>
                <div className='relative h-72 overflow-hidden mb-5 rounded-xl'>
                    <img src={product?.image} alt={product?.model} />
                    <AddToWishlistButton />
                </div>
                <div>
                    <div className='mb-3'>
                        <span>{product?.brand}</span>
                        <Link to={`/product/${product._id}`} className='line-clamp-1 font-semibold' title={product?.title}>{product?.title}</Link>
                        <p className='line-clamp-2 text-xs'>{product?.description}</p>
                    </div>
                    <div className='mb-3'>
                        <div className="flex gap-1">
                            {Array.from({ length: product.rating }).map((_, i) => (
                                <BsFillStarFill className='text-yellow-500' key={i} />
                            ))}
                            <span className='text-sm text-gray-500'>({product?.rating * Math.ceil(Math.random().toFixed(2)) * 10}+ reviews)</span>
                        </div>
                    </div>
                    <div className='mb-3'>
                        <span className='text-xl font-semibold'>₹ {(product.price).toFixed(2)}</span>
                    </div>
                    <AddToCartButton product={product} />

                </div>
            </div>
        );
    }

    return (
        <div className='p-4 bg-gray-50 rounded-2xl flex gap-5 border-b'>
            <div className='relative w-52 h-52 overflow-hidden mb-5 rounded-xl'>
                <img src={product?.image} alt={product?.model} className='w-full h-full object-fit-cover' />
            </div>
            <div>
                <div className='mb-3'>
                    <Link to={`/product/${product._id}`} className='line-clamp-1 font-semibold' title={product?.title}>{product?.title}</Link>
                    <p className='line-clamp-2 text-xs'>{product?.description}</p>
                </div>
                <div className='mb-3'>
                    <div className="flex gap-1">
                        {Array.from({ length: product.rating }).map((_, i) => (
                            <BsFillStarFill className='text-yellow-500' key={i} />
                        ))}
                        <span className='text-sm text-gray-500'>({product?.rating * Math.ceil(Math.random().toFixed(2)) * 10}+ reviews)</span>
                    </div>
                </div>
                <div className='mb-3'>
                    <ul>
                        <li>Brand: {product?.brand}</li>
                        <li>Category: {product?.category}</li>
                        <li>Type: {product?.type}</li>
                    </ul>
                </div>
                <div className='mb-3'>
                    <span className='text-xl font-semibold'>₹ {(product.price).toFixed(2)}</span>
                </div>
                
            </div>
        </div>
    );
}

export default ProductCard;
