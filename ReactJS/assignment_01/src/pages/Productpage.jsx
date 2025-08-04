import React from 'react';
import { BsFillStarFill, BsHeartFill, BsShareFill } from 'react-icons/bs';
import { Link, useLoaderData } from 'react-router-dom';
import { LuShoppingCart } from 'react-icons/lu';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cart.slice';
import { addToWishlist } from '../redux/slices/wishlist.slice';

const Productpage = () => {
    const product = useLoaderData();
    const dispach = useDispatch();

    return (
        <section className="w-full">
            <div className="container container-md container-lg mx-auto p-4 grid grid-cols-12 gap-32">
                <div className='col-span-4'>
                    <img src={product?.image} alt="" />
                </div>
                <div className='col-span-8 space-y-4'>
                    <span>{product.brand}</span>
                    <h2 className='font-semibold text-3xl'>{product?.title}</h2>
                    <span className='text-4xl font-bold'>₹ {product?.price.toFixed(2)}</span>
                    <p>{product?.description}</p>

                    <div className="font-sans">
                        <span className="text-sm font-medium text-gray-600">SIZES</span>
                        <ul className="mt-2 flex flex-wrap gap-3">
                            {product.size?.map((s, idx) => (
                                <li key={idx}>
                                    <input
                                        type="radio"
                                        id={s}
                                        name="size-selection"
                                        className="peer sr-only"
                                        defaultValue="M"
                                    />
                                    <label
                                        htmlFor={s}
                                        className="
                                            flex h-10 w-10 cursor-pointer items-center justify-center
                                            rounded-full border border-gray-300 bg-white
                                            text-sm font-semibold text-gray-700
                                            transition-colors duration-200 ease-in-out
                                            hover:bg-gray-50
                                            peer-checked:border-black peer-checked:bg-black peer-checked:text-white
                                        "
                                    >
                                        {s}
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='mb-3 flex items-center'>
                        <div className="flex gap-1">
                            {Array.from({ length: product.rating }).map((_, i) => (
                                <BsFillStarFill size={24} className='text-yellow-500' key={i} />
                            ))}
                        </div>
                        <span className='text-gray-500'>({product?.rating * Math.ceil(Math.random().toFixed(2)) * 10}+ reviews)</span>
                    </div>

                    <div className='flex gap-10'>
                        <div>
                            <span className='text-gray-500 text-sm '>Category</span>
                            <p className='text-lg font-semibold capitalize'>{product?.category}</p>
                        </div>

                        <div>
                            <span className='text-gray-500 text-sm '>Type</span>
                            <p className='text-lg font-semibold capitalize'>{product?.type}</p>
                        </div>

                    </div>

                    <div>
                        <button onClick={() => dispach(addToCart(product))} className='flex items-center gap-3 bg-blue-700 px-10 py-4 my-8 text-md font-semibold hover:bg-blue-600 text-white rounded-xl cursor-pointer shadow-xl shadow-blue-100'>
                            <LuShoppingCart size={24} />
                            <span>Add to cart</span>
                        </button>
                    </div>

                    <div className='py-3 flex gap-4'>
                        <button
                            onClick={() => dispach(addToWishlist(product))}
                            className='flex items-center gap-2 py-3 px-6 bg-gray-100 rounded-xl cursor-pointer'
                            >
                                <BsHeartFill size={22} />
                                <span className='text-xl'>Add to wishlist</span>
                        </button>

                        <Link to="" className='flex items-center gap-2 py-3 px-6 cursor-pointer'><BsShareFill /> <span className='text-xl'>Share</span></Link>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Productpage;