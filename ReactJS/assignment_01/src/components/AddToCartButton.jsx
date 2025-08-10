import React from 'react';
import { LuShoppingCart } from 'react-icons/lu';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cart.slice';

const AddToCartButton = ({product}) => {
    const dispatch = useDispatch();

    return (
        <button onClick={() => dispatch(addToCart(product))} className='w-fit px-4 py-2 bg-blue-500 text-white rounded-md flex items-center justify-center gap-2 cursor-pointer hover:bg-blue-400 hover:shadow-md shadow-blue-100'>
            <LuShoppingCart size={20} />
            <span>Add to cart</span>
        </button>
    );
}

export default AddToCartButton;
