import React from 'react';

const CheckoutButton = ({ isAuthenticated, totalAmount }) => {

    return (
        <button
            className={`${isAuthenticated ? 'hover:bg-blue-400 hover:shadow-md shadow-blue-100 bg-blue-500 text-white cursor-pointer' : ''} w-full px-4 py-2 rounded-md flex items-center justify-center gap-2 font-bold`}
        >
            {isAuthenticated ? `Proceed to checkout ₹ ${totalAmount?.toFixed(2)}` : "Sign in requred"}
        </button>
    );
}

export default CheckoutButton;