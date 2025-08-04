import React from 'react';
import { LuHeart } from 'react-icons/lu';

const AddToWishlistButton = () => {
    return (
        <button className='absolute bg-white rounded-full p-2 top-2.5 right-2.5 hover:shadow-md hover:bg-gray-100 cursor-pointer' title='add to wishlist'>
            <LuHeart />
        </button>
    );
}

export default AddToWishlistButton;
