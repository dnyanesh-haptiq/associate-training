import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTotalAmount } from '../redux/slices/cart.slice';
import CheckoutButton from './CheckoutButton';

const UserTotalCard = () => {
    const { totalAmount, items, size } = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const isAuthenticated = true;

    useEffect(() => {
        dispatch(getTotalAmount());
    }, [dispatch]);

    return (
        <div className='p-4 bg-gray-100 w-xl'>
            <h2 className='font-semibold text-2xl mb-3'>Total amount</h2>

            <div>
                <span>Items ({size && size})</span>
                <ul>
                    {items && items.map((item) => (
                        <li key={item._id}>
                            <h4 className='font-semibold text-lg'>{item.title}</h4>
                            <h3>{item.quantity} × {item.price}</h3>
                        </li>
                    ))}
                </ul>

                <CheckoutButton isAuthenticated = {isAuthenticated} totalAmount = {totalAmount} />
                
            </div>
        </div>
    );
}

export default memo(UserTotalCard);
